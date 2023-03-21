console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');
let pizzaSize1 = pizzaInput1.value;
let pizzaSize2 = pizzaInput2.value;
// calculatePizzaGain(pizzaSize1, pizzaSize2);

pizzaInput1.addEventListener("input", () => {
  pizzaSize1 = pizzaInput1.value;
  calculatePizzaGain(pizzaSize1, pizzaSize2);
  updatePizzaDisplay(pizza1, pizzaSize1);
  updateOutputColor();
});

pizzaInput2.addEventListener("input", () => {
  pizzaSize2 = pizzaInput2.value;
  calculatePizzaGain(pizzaSize1, pizzaSize2);
  updatePizzaDisplay(pizza2, pizzaSize2);
  updateOutputColor();
});

// Task 1

function calculatePizzaGain(diameter1, diameter2) {
  const area1 = Math.PI * (diameter1 / 2) ** 2;
  const area2 = Math.PI * (diameter2 / 2) ** 2;
  output.textContent = Math.round(((area2 - area1) / area1) * 100);
}

// Task 2

function updatePizzaDisplay(pizzaElement, newSize) {
  pizzaElement.style.width = String((newSize / 24) * 100) + "px";
}

// Task 3

function updateOutputColor() {
  if (parseInt(output.textContent) < 0) {
    outputSection.style["background-color"] = "var(--red)";
  } else {
    outputSection.style["background-color"] = "var(--green)";
  }
}
