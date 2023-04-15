import "./Tag.css";

export default function Tag({ tag }) {
  let tagClass = "tag";
  if (tag === "admin") tagClass = `tag tag--highlight`;
  return <li className={tagClass}>{tag}</li>;
}
