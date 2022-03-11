window.onload(testMessage());

function testMessage() {
  chrome.runtime.sendMessage(
    {
      from: "content",
      subject: "Test Message",
      text: "Hello from content script!",
    },
    () => console.log("Message sent")
  );
}
chrome.runtime.onMessage.addListener((request, sender) => {
  console.log(request);
  console.log(sender)
})