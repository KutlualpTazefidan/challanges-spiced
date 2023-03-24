console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  // Exercise: Append a new entry to the toast messages container
  const singleToastMessageContainer = document.createElement("li");
  singleToastMessageContainer.classList.add("toast-container__message");
  singleToastMessageContainer.innerText = "Heys";
  toastContainer.append(singleToastMessageContainer);
});

clearButton.addEventListener("click", () => {
  // Exercise: Clear the stack of toast messages
  allToastMessages = document.querySelectorAll(
    '[class="toast-container__message"]'
  );
  for (let i = 0; i < allToastMessages.length; i++) {
    toastContainer.removeChild(allToastMessages[i]);
  }
});
