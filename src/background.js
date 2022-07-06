browser.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log('Hello from the background')

  chrome.scripting.executeScript({
    file: 'content-script.js',
  });
})
