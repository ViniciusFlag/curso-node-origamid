import { createServer } from "node:http";

const frase1 = Promise.resolve("Ola ");
const frase2 = Promise.resolve("Mundo!");
const frasesPromises = [frase1, frase2];
const frases = [];

for await(const frase of frasesPromises) {
  frases.push(frase); // o push serve para adicionar elementos em um array
}

// console.log(frases.join("")); // join serve para juntar os elementos de um array em uma string

const part1 = Buffer.from("Olá ");
const part2 = Buffer.from("Mundo!");
const final = Buffer.concat([part1, part2]);

// console.log(final.toString('utf-8')); // toString serve para converter um buffer em string


const server = createServer(async (req, res) => {
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  
  const url = new URL(req.url, "http://localhost:3000");
  const cor = url.searchParams.get("cor");
  const tamanho = url.searchParams.get("tamanho");
  
  // console.log("headers", req.headers['content-type']);
  // console.log("raw headers", req.rawHeaders);
  
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(chunk);
  }

  const body = Buffer.concat(chunks).toString('utf-8'); // concat serve para juntar os buffers
  console.log(JSON.parse(body).userName); // parse serve para converter uma string em objeto
  

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