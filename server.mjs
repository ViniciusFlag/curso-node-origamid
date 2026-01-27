import { createServer } from "node:http";

const server = createServer((request, response) => {
  response.setHeader("Content-Type", "text/plain; charset=utf-8");
  
  if (request.method === "GET" && request.url === "/") {
    response.statusCode = 200;
    response.end("HOME");
  } else if (request.method === "POST" && request.url === "/produto") {
    response.statusCode = 201;
    response.end("Produto");
  } else {
    response.statusCode = 404;
    response.end("Pagina não encontrada");
  }
});

server.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});