console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  try {
    const response = await fetch(url);
    if (!response) {
      console.log("Bad request");
      return;
    }
    const starWarsPeople = await response.json();
    console.log(starWarsPeople.results);
    const heros = starWarsPeople.results.map((hero) => hero.name);
    console.log(heros);
    const eyeColorR2D2 = starWarsPeople.results.find(
      (hero) => (hero.name = "R2-D2")
    )["eye_color"];
    console.log(eyeColorR2D2);
    // console.table(starWarsPeople.name);
  } catch (error) {
    console.log("hey");
    console.error(error.name);
  }
}
console.log("asd");
fetchData();
