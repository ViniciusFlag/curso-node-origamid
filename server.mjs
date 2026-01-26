import { createServer } from "node:http";

const server = createServer((request, response) => {
  response.statusCode = 404;
  response.setHeader("Content-Type", "text/plain");
});

server.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});