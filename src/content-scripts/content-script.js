chrome.runtime.sendMessage('get-user-data', (response) => {
  console.log('received user data', response);
});