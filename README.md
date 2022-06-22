## Desafio Técnico BIUD

Este projeto foi proposto na etapa técnica do processo seletivo para a vaga de Desenvolvedor Front-End na BIUD.
É um projeto web completo onde o principal objetivo era criar um web app onde o usuário possa cadastrar **categorias** e, posteriormente cadastrar **artigos** vinculados a essas categorias.
O desafio também contempla o back-end como um opcional, que seria um diferencial na hora da avaliação do projeto.

### Tecnologias utilizadas:

#### Front-end:

* ReactJS
* ReactRouterDOM
* Axios
* SweetAlert
* Eslint
* StyleLint

#### Back-end:

* NodeJS
* ExpressJS
* Sequelize (**ORM**)
* MySQL
* HttpStatusCode
* DotEnv
* Cors

O **Front-end** foi implementado com 8 paginas, sendo elas:

* *Tela Principal*
* *Lista de categorias*
* *Cadastrar categoria*
* *Editar categoria*
* *Lista de artigos*
* *Cadastrar artigo*
* *Editar artigo*
* *Ler artigo*

O **Back-end** foi implementado com os seguites Endpoints:

* `/categories` (*GET* *POST*)
* `/categories/id` (*GET* *PUT* *DELETE*)
* `/articles` (*GET* *POST*)
* `/categories/id` (*GET* *PUT* *DELETE*)

### Como executar o projeto

1. Clone o repositório:
  * `git clone git@github.com:thiagopcdev/BIUD_challenge.git`
2. Digite a pasta do repositório que você acabou de clonar:
  * `cd BIUD_challenge`
3. Instale as dependências:
  * `npm install`
4. Execute o programa:
  * `npm start`

Feito isto, o seu navegador padrão deve abrir automaticamente com o endereço local,
caso nada aconteça, basta abrir seu navegador preferido e inserir a url `localhost:3000`.

**IMPORTANTE**
Para encerrar a aplicação, basta executar o comando `npm stop`, para isto certifique-se que você esteja na raiz da pasta BIUD_Challenge.