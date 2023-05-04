import { createServer } from "node:http";

export const server = createServer((req, res) => {
  console.log("Request: ", req.url);
  res.end("Hello Alp!");
});

// export const server = …
