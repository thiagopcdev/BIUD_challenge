## Desafio Técnico BIUD

Este projeto foi proposto na etapa técnica do processo seletivo para a vaga de Desenvolvedor Front-End na BIUD.
É um projeto web completo onde o principal objetivo era criar um web app onde o usuário possa cadastrar **categorias** e, posteriormente cadastrar **artigos** vinculados a essas categorias.
O desafio também contempla o back-end como um opcional, que seria um diferencial na hora da avaliação do projeto.

---

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

---

O **Front-end** foi implementado com 8 páginas, sendo elas:

* Tela Principal
* Lista de categorias
* Cadastrar categoria
* Editar categoria
* Lista de artigos
* Cadastrar artigo
* Editar artigo
* Ler artigo

O **Back-end** foi implementado com os seguites Endpoints:

* `/categories` (*GET*, *POST*)
* `/categories/id` (*GET*, *PUT*, *DELETE*)
* `/articles` (*GET*, *POST*)
* `/categories/id` (*GET*, *PUT*, *DELETE*)

##### Endpoint para o cadastro de categoria:

- O endpoint deve receber a seguinte estrutura:

```json
{
  "description": "nome_da_categoria"
}
```

![Criar categoria](./public/postCategory.png)

##### Endpoint para o atualizar categoria:

- O endpoint deve receber a seguinte estrutura:

```json
{
  "description": "nome_da_categoria"
}
```

![Atualizar categoria](./public/updateCategory.png)


##### Endpoint para buscar categorias:

![Buscar categorias](./public/getAllCategories.png)

##### Endpoint para buscar uma categoria:

![Buscar uma categoria](./public/getCategory.png)

##### Endpoint para apagar uma categoria:

![Apagar uma categoria](./public/deleteCategory.png)


##### Endpoint para o cadastro de artigo:

- O endpoint deve receber a seguinte estrutura:

```json
{
  "title": "titulo_do_artigo",
  "description": "descrição_do_artigo",
  "categoryId": "id_da_categoria"
}
```

![Criar artigo](./public/postArticle.png)

##### Endpoint para o atualizar artigo:

- O endpoint deve receber a seguinte estrutura:

```json
{
  "title": "titulo_do_artigo",
  "description": "descrição_do_artigo",
  "categoryId": "id_da_categoria"
}
```

![Atualizar artigo](./public/updateArticle.png)


---

### Requisitos

Para executar este projeto é necessário ter instalado em seu computador o **Node.js** e o **MySQL**.

---

### Como executar o projeto

1. Clone o repositório:
  * `git clone git@github.com:thiagopcdev/BIUD_challenge.git`
2. Entre na pasta do repositório que você acabou de clonar:
  * `cd BIUD_challenge`
3. Instale as dependências:
  * `npm install`
4. Acesse o arquivo **.env** dentro da pasta backend: 
  * `cd backend`
5. Dentro do arquivo .env altere o usuário e senha de acordo com o cadastro do seu MySQL: 
  * `MYSQL_USER, MYSQL_PASSWORD`
7. Retorne para a pasta raiz do projeto:
  * `cd ..`
8. Execute o programa:
  * `npm start`

Feito isto, o seu navegador padrão deve abrir automaticamente com o endereço local,
caso nada aconteça, basta abrir seu navegador preferido e inserir a url `localhost:3000`.

**IMPORTANTE**
Para encerrar a aplicação, basta executar o comando `npm stop`, para isto certifique-se que você esteja na raiz da pasta BIUD_Challenge.

---