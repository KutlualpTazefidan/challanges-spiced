console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

hideTosError();
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  if (!document.getElementById("tos").checked) {
    showTosError();
    return;
  }
  hideTosError();
  // --^-- write your code here --^--

  alert("Form submitted");
  // eslint-disable-next-line no-alert
});
