chrome.runtime.sendMessage('get-user-data', function (response){
  console.log('received user data', response);
});