import React from "react";
import "./styles.css";

export default function App() {
  return <Sum valueA={2} valueB={3} />;
}
function Sum({ valueA, valueB }) {
  return (
    <h1>
      The sum of &quot;{valueA}&quot; and &quot;{valueB}&quot; is &quot;
      {valueA + valueB}&quot;
    </h1>
  );
}
