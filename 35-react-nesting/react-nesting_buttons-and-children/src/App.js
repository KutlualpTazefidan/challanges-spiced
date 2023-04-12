import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Click me1!</Button>
      <Button>Click me2!</Button>
      <Button>Click me3!</Button>
      <Button>Click me4!</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
