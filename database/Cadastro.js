import { Sequelize } from "sequelize";
import connection from "./database.js"; // Corrigido o caminho de importação

const Cadastro = connection.define('usuarios', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

await Cadastro.sync({force: false}); 

export default Cadastro;