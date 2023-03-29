console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Jane Doe");
}

// The exercise starts here!
function showWelcomeMessage(userName) {
  console.log(userName);
}

handleUserLogin(showWelcomeMessage, "Welcome Jane Doe! You are logged in now");

handleUserLogin((userName) => {
  console.log(userName);
}, "Welcome Jane Doe! You are logged in now");
