console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;
  // --v-- write your code here --v--
  const numberA = parseInt(document.getElementById("number-a").value);
  const numberB = parseInt(document.getElementById("number-b").value);
  const radioButtons = document.getElementsByName("operator");
  for (i = 0; i < radioButtons.length; i++) {
    console.log(radioButtons[i].checked);
    if (radioButtons[i].checked) {
      switch (radioButtons[i].value) {
        case "addition":
          result = add(numberA, numberB);
          break;
        case "subtraction":
          result = subtract(numberA, numberB);
          break;
        case "multiplication":
          result = multiply(numberA, numberB);
          break;
        case "division":
          result = divide(numberA, numberB);
          break;
      }
    }
  }
  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
