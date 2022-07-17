const sendMessageToCurrentPage = (name, message) => {
    chrome.tabs.query(
        {
            active: true,
            currentWindow: true,
        },
        (pages) => {
            chrome.tabs.sendMessage(pages[0].id, { name, message });
        }
    );
};

setInterval(() => {
    sendMessageToCurrentPage("firstMessage", "Hi Content Script!");
}, 10 * 1000);

let color = "#3aa757";

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color });
    console.log("Default background color set to %cgreen", `color: ${color}`);
});
