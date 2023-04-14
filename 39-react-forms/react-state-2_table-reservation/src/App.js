import React from "react";
import Counter from "./components/Counter";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [numberOfPeople, setNumberOfPeople] = useState(0);

  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter setPeople={setNumberOfPeople} people={numberOfPeople} />
      <p>You are going to reserve a table for {numberOfPeople} people.</p>
    </div>
  );
}
