<h1 align="center">
    <img alt="Rocketseat" title="Rocketseat" src=".github/rocketseat.png" width="60px" />
</h1>

<p align="center">
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-rodar">Como rodar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-rotas">Rotas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-contribuir">Como contribuir</a>&nbsp;&nbsp;&nbsp;
  </p>
<p align="center">
 <img src="https://img.shields.io/static/v1?label=PRs&message=welcome&color=7159c1&labelColor=000000" alt="PRs welcome!" />

</p>

<br>

## API rest mostrar rodadas do Brasileirão

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/) - v14.4.0
- [Mongo](https://www.mongodb.com/)
- [Docker](https://www.docker.com/) - 19.03.8
- [Yarn](https://yarnpkg.com/) - 1.22.4
- [Npm](https://www.npmjs.com/) - 6.14.5
- [Sequelize](https://sequelize.org/) - 6.5.0


## 💻 Projeto

Projeto para cadastro de rodadas do Brasileirão usando NodeJS, Express, MongoDB e Docker.

## 🚀 Como Rodar

- Clone o projeto.
- Rode o comando "docker run --name mongodb -p 27017:27017 -d -t mongo"
- docker ps para ver se o Mongo está rodando no Docker.
- Caso não esteja docker start mongo para rodar.
- Entre na pasta do projeto e rode o comando "yarn install" para instalar as dependências.
- Rode yarn sequelize db:create para criar o banco de dados;
- Rode yarn sequelize db:migrate para executar as migrations;
- Rode yarn dev para iniciar o servidor.
- Para testar a API acesse localhost:3333.

## 👩🏿‍💻 Rotas

- **`POST /users`**: Rota para cadastrar usuarios;
Envio
```
{
    "name" :"João Mangueira",
    "email" :"joao@joao.com"
}
```

Retorno
```
{
    "id": 2,
    "name": "João Mangueira",
    "email": "joao@joao.com",
    "updatedAt": "2021-02-12T22:03:36.431Z",
    "createdAt": "2021-02-12T22:03:36.431Z"
}
```

- **`GET /users`**: Rota para listar usuarios;
Retorno
```
[
    {
        "id": 2,
        "name": "João Mangueira",
        "email": "joao@joao.com",
        "createdAt": "2021-02-12T22:03:36.431Z",
        "updatedAt": "2021-02-12T22:03:36.431Z"
    }
]
```

- **`POST /users/:userId/addresses`**: Rota para cadastros de endereços de usuarios;
Envio
```
{
    "zipcode" :"00125-000",
    "street" :"Rua Y",
    "number" :236
}
```
 
 Retorno
 ```
{
    "id": 2,
    "zipcode": "00125-000",
    "street": "Rua Y",
    "number": 236,
    "user_id": 2,
    "updatedAt": "2021-02-12T22:43:18.827Z",
    "createdAt": "2021-02-12T22:43:18.827Z"
}
```

- **`GET /users/:userId/addresses`**: Rota para listagem de endereços de usuarios;
Retorno
```
{
    "id": 2,
    "name": "João Mangueira",
    "email": "joao@joao.com",
    "createdAt": "2021-02-12T22:03:36.431Z",
    "updatedAt": "2021-02-12T22:03:36.431Z",
    "addresses": [
        {
            "id": 1,
            "zipcode": "00125-555",
            "street": "Rua X",
            "number": 178,
            "createdAt": "2021-02-12T22:39:09.321Z",
            "updatedAt": "2021-02-12T22:39:09.321Z",
            "user_id": 2
        },
        {
            "id": 2,
            "zipcode": "00125-000",
            "street": "Rua Y",
            "number": 236,
            "createdAt": "2021-02-12T22:43:18.827Z",
            "updatedAt": "2021-02-12T22:43:18.827Z",
            "user_id": 2
        }
    ]
}
```

## 🤔 Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

