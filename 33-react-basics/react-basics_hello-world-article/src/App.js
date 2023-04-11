import React from "react";
import "./styles.css";

function HelloWorldArticle() {
  return (
    <article>
      <h1>Hello Tatooine</h1>
      <p>We are back at Tatooine</p>
    </article>
  );
}

export default function App() {
  return <HelloWorldArticle />;
}
