import { log } from "node:console";
import { createServer } from "node:http";

const server = createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  
  const url = new URL(req.url, "http://localhost:3000");
  const cor = url.searchParams.get("cor");
  const tamanho = url.searchParams.get("tamanho");

  console.log("headers", req.headers['content-type']);
  console.log("raw headers", req.rawHeaders);

  if (req.method === "GET" && url.pathname === "/") {
    res.statusCode = 200;
    res.end("HOME");
  } else if (req.method === "POST" && url.pathname === "/produto") {
    res.statusCode = 201;
    res.end(`Produto: ${cor}, ${tamanho}`);
  } else {
    res.statusCode = 404;
    res.end("Pagina não encontrada");
  }
});

server.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});