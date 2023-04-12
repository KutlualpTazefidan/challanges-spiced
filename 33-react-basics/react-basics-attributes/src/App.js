import React from "react";
import "./styles.css";

function Article() {
  return (
    <article className="article">
      {" "}
      <h2 className="article__title">Tatooine news</h2>
      <label htmlFor="input"></label> <input id="input"></input>
      <a
        className="article__link"
        href="https://www.starwarsnewsnet.com/tag/tatooine"
      >
        SW news
      </a>
    </article>
  );
}

export default function App() {
  return <Article />;
}
