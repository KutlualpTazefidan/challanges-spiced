import React from "react";
import "./styles.css";

export default function App() {
  function handleClick(dateOfToday) {
    alert(`Today is ${dateOfToday}!`);
  }

  return (
    <Button
      buttonColor="#ffffff"
      buttonBackgroundColor="#fc0303"
      disabled={false}
      text="Date of Today !"
      onPressButton={() => handleClick(new Date().toLocaleDateString("en-US"))}
    />
  );
}

function Button({
  buttonColor,
  buttonBackgroundColor,
  disabled,
  text,
  onPressButton,
}) {
  const myButtonStyle = {
    height: "2rem",
    color: buttonColor,
    backgroundColor: buttonBackgroundColor,
  };

  return (
    <button onClick={onPressButton} style={myButtonStyle} disabled={disabled}>
      {text}
    </button>
  );
}
