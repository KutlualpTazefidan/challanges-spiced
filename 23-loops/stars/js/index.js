console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--;
  for (let index = 1; index <= 5; index++) {
    const emptyStar = document.createElement("img");
    filledStars > 0
      ? (emptyStar.src = "assets/star-filled.svg")
      : (emptyStar.src = "assets/star-empty.svg");
    emptyStar.addEventListener("click", () => {
      renderStars(index);
    });
    starContainer.append(emptyStar);
    filledStars--;
  }
}
//--^-- your code here --^--

renderStars(2);
