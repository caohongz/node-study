const Sequelize = require("sequelize");
// const env = require("dotenv");
const conf = require("./conf");

// env.config();
const sequelize = new Sequelize(conf.database, conf.username, conf.password, {
  dialect: "mysql",
  host: conf.host,
  operatorsAliases: false,
  // logging: logger.debug.bind(logger),
});

module.exports = sequelize;
