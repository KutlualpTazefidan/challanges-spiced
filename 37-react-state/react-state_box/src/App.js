import "./styles.css";
import { useState } from "react";

export default function App() {
  const [isActive, setButtonState] = useState(false);

  function handleClick() {
    setButtonState(!isActive);
    console.log(isActive);
  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>Activate</button>
    </main>
  );
}
