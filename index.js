import express from 'express';
import connection from './database/database.js'; 
import Cadastro from './database/Cadastro.js';
import Servico from './database/Servico.js';

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

app.get("/cadastrar_servico", (req, res) => {
    res.render("cadastrar_servico");
});

app.get("/servicos", (req, res) => {
    res.render("servicos");
});

app.post("/salvarservico", (req, res) => {
    let titulo = req.body.titulo;
    let CEPloc = req.body.cep;
    let rua = req.body.rua;
    let numero = req.body.numero;
    let bairro = req.body.bairro;
    let descricao = req.body.descricao;

    Servico.create({
        titulo: titulo,
        CEPloc: CEPloc,
        rua: rua,
        numero: numero,
        bairro: bairro,
        descricao: descricao
    }).then(() => {
        res.redirect("/servicos");
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