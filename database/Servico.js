import { Sequelize } from "sequelize";
import connection from "./database.js";

const Servico = connection.define('servico', {
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    CEPloc: {
        type: Sequelize.STRING,
        allowNull: true
    },
    rua: {
        type: Sequelize.STRING,
        allowNull: false
    },
    numero: {
        type: Sequelize.STRING,
        allowNull: false
    },
    bairro:{
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao:{
        type: Sequelize.TEXT,
        allowNull: false
    }
});

await Servico.sync({force: false});

export default Servico;