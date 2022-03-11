// chrome.bookmarks.onMoved.addListener(() => {
//   alert("bookmark moved");
// });

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log(request);
  console.log(sender);
  console.log(sendResponse());
});

chrome.bookmarks.onMoved.addListener(() => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { name: "taha" });
  });
});
