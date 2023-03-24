console.clear();

const input = document.querySelector('[data-js="toUpperCase"]');

input.addEventListener("input", (event) => {
  const inputText = event.target.value;
  setTimeout(() => {
    event.target.value = inputText.toUpperCase();
  }, 200);
});
