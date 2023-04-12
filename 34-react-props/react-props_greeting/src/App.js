import "./styles.css";

export default function App() {
  return <Greeting name="Jan" />;
  // return <Greeting name="Ahsoka" />;
}

function Greeting({ name }) {
  const coaches = ["Klaus", "Gimena", "Marcell", "Yair", "Jan"];

  return <h1>Hello, {coaches.includes(name) ? "Coach" : name}!</h1>;
}
