console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current time: new Date().getHours() )
(HINT: you can get the current weekday: new Date().getDay() )

*/

const display = document.querySelector('[data-js="display"]');

function getGreeting() {
  currentHour = new Date().getHours();
  if (currentHour >= 6 && currentHour <= 12) {
    return "Gooood Morning!";
  }
  if (currentHour >= 13 && currentHour <= 18) {
    return "Gooood Afternoon!";
  }
  if (currentHour >= 19 && currentHour <= 22) {
    return "Gooood Evening!";
  }
  if (currentHour <= 5 || currentHour >= 23) {
    return "Gooood Night!";
  }
  return "Apocalypse?";
}

function getDayColor() {
  currentDay = 6;
  // new Date().getDay;
  if (currentDay === 1) {
    return "red";
  }
  if (currentDay >= 2 && currentDay <= 5) {
    return "lightblue";
  }
  if (currentDay < 1 || currentDay > 5) {
    return "pink";
  }
}
display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
