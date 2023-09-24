"use strict";

/**
 * Notify content.js when users clicked on app logo
 * */
chrome.action.onClicked.addListener(function (activeTab) {
  chrome.tabs.sendMessage(activeTab.id, "browser_action");
});

/**
 * Register Right click menu item
 * contextMenu item
 * **/
chrome.contextMenus.create({
  title: "Web Editor",
  contexts: ["all"],
  id: "WEB_EDITOR",
});

chrome.contextMenus.onClicked.addListener(toggleWebApp);

function toggleWebApp(info, activeTab) {
  chrome.tabs.sendMessage(activeTab.id, "context");
}
