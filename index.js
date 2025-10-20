import express from 'express';
import connection from './database/database.js'; 
import Cadastro from './database/Cadastro.js';
import Pedido from './database/Pedido.js';

connection.authenticate()
    .then(() => {console.log("conexão com o banco de dados realizada com sucesso!");
        }).catch((error) => {
        console.log("erro ao se conectar com o banco de dados: " + error);
        }
        );

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/", (req, res) => {
    res.render('index')
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.get("/cadastrar", (req, res) => {
    res.render("cadastrar");
});

app.get("/pedir", (req, res) => {
    res.render("pedir");
});

app.get("/pedidos", (req, res) => {
    res.render("pedidos");
});

app.post("/salvarpedido", (req, res) => {
    let titulo = req.body.titulo;
    let CEPloc = req.body.cep;
    let rua = req.body.rua;
    let numero = req.body.numero;
    let bairro = req.body.bairro;
    let destino = req.body.destino;

    Pedido.create({
        titulo: titulo,
        CEPloc: CEPloc,
        rua: rua,
        numero: numero,
        bairro: bairro,
        destino: destino
    }).then(() => {
        res.redirect("/pedidos");
    });
});

app.post("/salvarcadastro", (req, res) => {
    let nome = req.body.nome;
    let email = req.body.email;
    let telefone = req.body.telefone;
    let senha = req.body.senha;
    Cadastro.create({
        nome: nome,
        email: email,
        telefone: telefone,
        senha: senha
    }).then(() => {
        res.redirect("/");
    });
});

app.listen(3000, () => {
    console.log("servidor rodando em http://localhost:3000");
});