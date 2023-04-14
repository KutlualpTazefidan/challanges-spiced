import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1337,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 1338,
      name: "🍎 Apple",
      color: "red",
    },
    {
      id: 1339,
      name: "🥑 Avocado",
      color: "green",
    },
    {
      id: 1340,
      name: "🍊 Orange",
      color: "orange",
    },
    {
      id: 1341,
      name: "🥔 Potatoes",
      color: "braun",
    },
  ];

  return (
    <div className="app">
      {fruits.map((fruit, i) => {
        return <Card name={fruit.name} color={fruit.color} key={i} />;
      })}
    </div>
  );
}
