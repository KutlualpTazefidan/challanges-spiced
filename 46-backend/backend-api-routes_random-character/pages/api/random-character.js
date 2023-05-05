import Chance from "chance";

const chance = new Chance();

export default function handler(req, res) {
  res.status(200).json("hey");
}
