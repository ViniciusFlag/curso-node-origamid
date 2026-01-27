## Back End Node.js. 
## Por André Rafael - Origamid

## O Curso
# Back End Node.js
Router, Middleware, Autenticação, Validação, Stream, Docker e mais.

# Pré-requisitos
JavaScript, TypeScript e SQLite

# Ferramentas
VS Code e Node 24+

# Slides
https://www.origamid.com/slide/back-end-node-js

# Projeto
Esse é um curso de Projeto, onde um Framework e um LMS (Learning Management System) serão desenvolvidos do início ao fim.

# Zero Dependências
Um Framework de Back End em Node.js será criado do zero para o desenvolvimento de APIs. O Framework não terá nenhuma dependência.

# Aula 0103 Ferramentas 2
quando é colocado um 'm' na frente do js, indica que aquele arquivo é um tipo module. Este arquivo permite que você utilize o import from, que importa outros arquivos

# Comandos
node --watch nomeArquivo.mjs "permite que o terminal fique observando as atualizações do arquivo
node --no-warnings --watch "não permite que avisos sejam exibidos"

# instale os tipos do node
npm i -D @types/node

# é possivel deixar invisivel algumas pastas e arquivos dentro do projeto
basta criar a pasta .vscode e adicionar o seguinte código
{
    "files.exclude": {
        "nomeArquivo.extensao": true
    }
}

# createServer - Função para criar servidores em Node.js
- (req, res) => {}
Callback que é ativado toda vez que é feito uma requisição ao servidor. Possui acesso a requisissão (req) e a resposta (res).

- listen(port)
Inicia o servidor e fica aguardando as requisições na porta passada

# Response - É um objeto do tipo serverResponse que possui propriedades e metodos para interagir com a resposta que sera dada pelo servidor
statusCode: Define o status da resposta como 200(ok), 404(not found), 301(Moved Permanently), 201(Created) e outros

setHeader(key, value): é o que define os cabeçalhos para uma resposta, recebe a chave e depois o valor

# Request - É um objeto do tipo IncomingMessage com propriedades e metodos para obter dados da requisição, com isso, é possivel identificar as rotas passadas pelo usuário e servir as informações corretas
method: Identifica qual é o método utilizado no request (GET, POST, DELETE ...)
url: Pega a URL utilizada durante o request

# URL - É onde é pego parte da rota, utilizando o req.url. Mas para obter a URL completa, é necessario construir ela
new URL(path, host): é a função construtora de URL, ela faz um parsing e cria um objeto com as suas partes
req.url: contem apenas o path + query (sem protocolo/host), ex.: /caminho?query=1

# Header - É o cabeçalho
content-type: é o tipo de conteúdo recebido, pode ser (application/json, text/html, multipar/form-data ...)
authorization: é a parte do header onde vem o token de sessão/autenticação
cookie: que são enviados pelo cliente
x-forwarded-for: endereço de ip de origem. Pode vir também pelo req.socket.remoteAddress.
