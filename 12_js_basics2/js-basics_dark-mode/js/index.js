console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

const darkModeButton = document.querySelector('[data-js="dark-mode-button"]');
console.log(darkModeButton);
darkModeButton.addEventListener("click", (event) => {
  bodyElement.classList.add("body-dark");
});

const lightModeButton = document.querySelector('[data-js="light-mode-button"]');
lightModeButton.addEventListener("click", (event) => {
  bodyElement.classList.add("body-dark");
  bodyElement.classList.remove("body-dark");
});

const toggleButton = document.querySelector('[data-js="toggle-button"]');
toggleButton.addEventListener("click", (event) => {
  bodyElement.classList.toggle("body-dark");
});
