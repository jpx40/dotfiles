/* global chrome */
console.log('foobar')
chrome.action.onClicked.addListener(async () => {
    const [activeTab] = await chrome.tabs.query({active: true, currentWindow: true})
    chrome.scripting.executeScript({
        target: {tabId: activeTab.id},
        files: ['scripts/index.js']
    });
    chrome.scripting.insertCSS({
        target: {tabId: activeTab.id },
        files: ['styles/page.css']
    });
});