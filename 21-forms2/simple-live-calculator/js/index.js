console.clear();

const firstInput = document.querySelector('[data-js="firstValue"]');
const secondInput = document.querySelector('[data-js="secondValue"]');
const result = document.querySelector('[data-js="result"]');

const resultsValue = 0;
firstInput.addEventListener("input", (event) => {
  result.textContent = event.target.value * secondInput.value;
});

secondInput.addEventListener("input", (event) => {
  result.textContent = event.target.value * firstInput.value;
});
