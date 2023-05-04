import { createServer } from "node:http";
import Chance from "chance";
const PORT = 8000;

const chance = new Chance();
export const server = createServer((req, res) => {
  const namePerson = chance.name();
  const agePerson = chance.age();
  const professionPerson = chance.profession();
  res.end(
    `Hello, my name is ${namePerson} and I am ${agePerson} years old. I am a ${professionPerson}.`
  );
  res.statusCode = 200;
});

// export const server = …
