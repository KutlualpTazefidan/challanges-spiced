console.clear();

const cards = [
  {
    id: "1",
    question: "How often can I use <header>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "2",
    isBookmarked: false,
    question: "How often can I use <aside>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "3",
    isBookmarked: true,
    question: "On which types can I use destructuring assignment?",
    answer: "On Objects and Arrays",
    tags: ["js", "next"],
  },
];

const onlyCardWithIdTwo = cards.filter((card) => card.id === "2");
// console.log("onlyCardWithIdTwo", onlyCardWithIdTwo[0]);

const allCardsWith3Tags = cards.filter((card) => {
  return card.tags.length === 3;
});
// console.log("allCardsWith3Tags", allCardsWith3Tags);

const allCardsThatAreNotBookmarked = cards.filter((card) => {
  return !card.isBookmarked;
});
// console.log("allCardsThatAreNotBookmarked", allCardsThatAreNotBookmarked[0]);

const allCardsWithTagsHTMLOrJSThatAreBookmarked = cards.filter((card) => {
  return (
    (card.tags.map((tag) => tag === "HTML") ||
      card.tags.map((tag) => tag === "HTML")) &&
    card.isBookmarked
  );
});
console.table(allCardsWithTagsHTMLOrJSThatAreBookmarked[0]);

export {
  onlyCardWithIdTwo,
  allCardsWith3Tags,
  allCardsThatAreNotBookmarked,
  allCardsWithTagsHTMLOrJSThatAreBookmarked,
};
