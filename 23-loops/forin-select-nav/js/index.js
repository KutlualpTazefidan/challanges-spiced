console.clear();

const main = document.querySelector('[data-js="main"]');

// Part 1: Creating a Select Input

const languages = {
  DE: "German",
  EN: "English",
  ES: "Spanish",
  FR: "French",
  IT: "Italian",
  NL: "Dutch",
  PT: "Portuguese",
  RU: "Russian",
  ZH: "Chinese",
};

const select = document.createElement("select");
select.name = "languages";
main.append(select);

// --v-- write/change code here --v--
for (const language in languages) {
  console.log(languages[language]);
  options = document.createElement("option");
  options.value = languages[language];
  options.textContent = languages[language];
  select.append(options);
}

// --^-- write/change code here --^--

// Part 2: Creating a Navigation Bar

const nav = {
  home: { href: "/home", text: "Home" },
  about: { href: "/about", text: "About" },
  contact: { href: "/contact", text: "Contact" },
};

const navElement = document.createElement("nav");
const ul = document.createElement("ul");
main.append(navElement);
navElement.append(ul);

// --v-- write/change code here --v--
for (const navItem in nav) {
  listItem = document.createElement("li");
  anchorTag = document.createElement("a");
  anchorTag.href = nav[navItem]["href"].substring(1);
  anchorTag.textContent = nav[navItem]["text"];
  listItem.append(anchorTag);
  ul.append(listItem);
}
// --^-- write/change code here --^--
