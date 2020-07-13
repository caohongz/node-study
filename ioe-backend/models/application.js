const Sequelize = require("sequelize");
const sequelize = require("../conf/db");

const Application = sequelize.define("application", {
  id: {
    type: Sequelize.INTEGER,
    autoIncreament: true,
    allowNull: false,
    primaryKey: true,
  },
  status: Sequelize.INTEGER,
});

module.exports = Application;
