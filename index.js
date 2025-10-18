import express from 'express';
import connection from './database/database.js'; 
import Cadastro from './database/Cadastro.js';

connection.authenticate()
  .then(() => {
    console.log("conexão com o banco de dados realizada com sucesso!");
    }).catch((error) => {
      console.log("erro ao se conectar com o banco de dados: " + error);
    }
    );

const app = express();

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  res.render('index')
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/cadastrar", (req, res) => {
  res.render("cadastrar");
});

app.listen(3000, () => {
  console.log("servidor rodando em http://localhost:3000");
});