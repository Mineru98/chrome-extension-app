chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log(sender.tab ? "from a content script:" + sender.tab.url : "from the extension");
    if (request.greeting == "hello") sendResponse({ farewell: "goodbye" });
});

window.addEventListener("DOMContentLoaded", () => {
    // DOM 내용을 로드 된 이후 작업을 하는 함수
});
