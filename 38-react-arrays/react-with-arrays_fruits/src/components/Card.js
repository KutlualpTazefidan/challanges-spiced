import "./Card.css";

export default function Card({ name, color }) {
  const classWithColor = `card card--${color}`;
  return <p className={classWithColor}>{name}</p>;
}
