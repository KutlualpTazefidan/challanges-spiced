import { createServer } from "node:http";

export const server = createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.end("home");
      res.statusCode = 200;
      break;
    case "/about":
      res.end("about");
      res.statusCode = 200;
      break;
    case "/api/fish/1":
      res.end("shrimp");
      res.statusCode = 200;
      break;
    case "/api/fish/2":
      res.end("Anemonefish");
      res.statusCode = 200;
      break;
    default:
      res.end("not found");
      res.statusCode = 404;
      break;
  }
});

// export const server = …
