// ===========================================
// This file holds the logic to set/save/load extension preferences.
// This includes changing the sort order and opening images in either the background, foreground or the current tab.
// ===========================================

const tineye = {};

// Saves options to storage.
tineye.saveOptions = function () {
  const sort_order_radio = document.getElementsByName("sort_order");
  const tab_visibility_radio = document.getElementsByName("tab_visibility");

  for (let i = 0; i < sort_order_radio.length; i++) {
    if (sort_order_radio[i].checked)
      chrome.storage.local.set({ sort_order: sort_order_radio[i].value });
  }

  for (let k = 0; k < tab_visibility_radio.length; k++) {
    if (tab_visibility_radio[k].checked)
      chrome.storage.local.set({ tab_visibility: tab_visibility_radio[k].value });
  }
};

// Restores select box state to saved value from localStorage.
tineye.restoreOptions = function () {
  chrome.storage.local.get(["sort_order", "tab_visibility"], function (result) {
    let sort_order = null;
    let tab_visibility = null;

    if (result.sort_order) {
      sort_order = result.sort_order;
    } else {
      sort_order = "last_used";
      chrome.storage.local.set({ sort_order: "last_used" });
    }

    if (result.tab_visibility) {
      tab_visibility = result.tab_visibility;
    } else {
      tab_visibility = "background";
      chrome.storage.local.set({ tab_visibility: "background" });
    }

    document.getElementById(sort_order).checked = true;
    document.getElementById(tab_visibility).checked = true;
  });

  // Bind save to radio buttons
  const sort_order_radio = document.getElementsByName("sort_order");
  const tab_visibility_radio = document.getElementsByName("tab_visibility");

  for (let i = 0; i < sort_order_radio.length; i++) {
    sort_order_radio[i].addEventListener("click", tineye.saveOptions, false);
  }

  for (let k = 0; k < tab_visibility_radio.length; k++) {
    tab_visibility_radio[k].addEventListener("click", tineye.saveOptions, false);
  }
};

// Load options
document.addEventListener("DOMContentLoaded", tineye.restoreOptions);
