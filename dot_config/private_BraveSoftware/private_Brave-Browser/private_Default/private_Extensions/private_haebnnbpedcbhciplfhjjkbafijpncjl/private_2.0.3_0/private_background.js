// MV3 removes support for persistent background scripts.
// We need to ensure that listeners are at the top-level and use the synchronous pattern.
// This ensures that the browser will be able to immediately find and invoke the action's click handler, even if the extension hasn't finished executing its async startup logic.

const tineye = {};

tineye.SERVER = "tineye.com";
tineye.VERSION = "2.0.3";
tineye.BROWSER = "chrome";

// Fired when the extension is first installed, when the extension is updated to a new version, and when browser is updated to a new version.
chrome.runtime.onInstalled.addListener(function () {
  // ID is mandatory for non-persistent background (event) pages.
  chrome.contextMenus.create({
    id: "tineye-chrome-ext",
    title: "Search Image on TinEye",
    contexts: ["image"],
  });
});

// Sends the selected image to TinEye
chrome.contextMenus.onClicked.addListener(function (info) {
  chrome.storage.local.get(["sort_order", "tab_visibility"], function (result) {
    const sort_order_query_string = tineye.sortOrder(result.sort_order);
    const url = encodeURIComponent(info.srcUrl);

    // Check the size of the url, if it is larger than ~30kb (actually 32 however we use 30 here for a bit of safety) there will be issues with CloudFlare and other proxies, so we display an error page instead instructing the user to post the image
    const request_url =
      url.length < 30720
        ? "https://" +
          tineye.SERVER +
          "/search/?pluginver=" +
          tineye.BROWSER +
          "-" +
          tineye.VERSION +
          sort_order_query_string +
          "&url=" +
          url
        : "https://" + tineye.SERVER + "/data_url_error";

    tineye.openUrl(result.tab_visibility, request_url);
  });
});

// Check which sort order the user wants
tineye.sortOrder = function (sort_order) {
  let query_string = "";
  switch (sort_order) {
    case "best_match":
      query_string = "&sort=score&order=desc";
      break;
    case "most_changed":
      query_string = "&sort=score&order=asc";
      break;
    case "biggest_image":
      query_string = "&sort=size&order=desc";
      break;
    case "newest":
      query_string = "&sort=crawl_date&order=desc";
      break;
    case "oldest":
      query_string = "&sort=crawl_date&order=asc";
      break;
    default:
      query_string = "";
  }
  return query_string;
};

tineye.openUrl = async function (tab_visibility, url) {
  let queryOptions = { currentWindow: true, active: true };
  // Get current tab
  let [tab] = await chrome.tabs.query(queryOptions);
  // Get new tab index and open new tabs next to current one
  const new_tab_index = tab.index + 1;
  // Add openerTabId to provide better interop with other extensions
  const openerTabId = tab.id;

  // Check where the user wants the url to be open
  switch (tab_visibility) {
    case "background":
      chrome.tabs.create({
        url: url,
        active: false,
        index: new_tab_index,
        openerTabId,
      });
      break;
    case "foreground":
      chrome.tabs.create({
        url: url,
        active: true,
        index: new_tab_index,
        openerTabId,
      });
      break;
    case "current":
      chrome.tabs.update(tab.id, { url: url });
      break;
    default:
      chrome.tabs.create({
        url: url,
        active: false,
        index: new_tab_index,
        openerTabId,
      });
  }
};
