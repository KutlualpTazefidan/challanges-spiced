console.clear();

const form = document.querySelector('[data-js="form"]');
const badSlider = document.querySelector("#badness");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formElements = new FormData(event.target);
  const formDataArray = Object.fromEntries(formElements);
  console.log(
    `The age-badness-sum of ${formDataArray.firstName} is ${
      formDataArray.age * badSlider.value
    }`
  );
});
