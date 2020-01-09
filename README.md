# API Portal pegadas
O portal inicialmente apresenta um crud basico, posteriomente existirá uma rota para cada tipo de usuario.
## Pre-requerimentos:
Todo sistema funciona em um container docker, então tudo que você precisa é ter o docker no seu computador e acesso a internet.
> sudo apt-get install docker
> sudo apt-get install docker-compose
## Instalação:
 Para a instalação do projeto, rode o comando 'npm install' para instalar os modulos do node.js, logo após 'tsc' para compilar o projeto TypeScript em Javascript. Por ultimo rode o comando 'sudo docker-compose build'.
## Subindo o servidor:
Para subir o servidor utilize o comando:
> sudo docker-compose up
### Dica:
Alguns bugs podem ser resolvidos ao utilizar o seguinte comando para limpar a imagem do container:
> sudo docker-compose down
## Todo List
- [X] Criação do crud basico
- [X] Autenticação
- [] Upload de arquivos
- [] Separação das rotas
