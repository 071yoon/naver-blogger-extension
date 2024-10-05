// This file is injected as a content script
// console.log("Hello from content script!");

// will fix later
// @ts-ignore
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  // If the received message has the expected format...
  // if (msg.msg === "scroll") {
  //   // Call the specified callback, passing
  //   // the web-page's DOM content as argument
  //   sendResponse();
  // }
});
