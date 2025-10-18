import { Sequelize } from "sequelize";

const connection = new Sequelize("db_pedeai", "root", "caio", {
  host: "localhost",
  dialect: "mysql",
});

export default connection;