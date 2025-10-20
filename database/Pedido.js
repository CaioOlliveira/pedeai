import { Sequelize } from "sequelize";
import connection from "./database.js";

const Pedido = connection.define('pedidos', {
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
    destino: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

await Pedido.sync({force: false});

export default Pedido;