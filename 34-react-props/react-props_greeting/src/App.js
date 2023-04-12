import "./styles.css";

export default function App() {
  return <Greeting name="Klaus" />;
  // return <Greeting name="Ahsoka" />;
}

function Greeting({ name }) {
  return <h1>Hello, {name === "Klaus" ? "Coach" : name}!</h1>;
}
