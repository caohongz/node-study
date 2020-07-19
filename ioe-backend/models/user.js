const Sequelize = require("sequelize");
const sequelize = require("../conf/db");

const User = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: Sequelize.STRING,
  password: Sequelize.STRING,
  idcardnum: Sequelize.STRING,
  phone: Sequelize.STRING,
  gender: Sequelize.STRING,
  schoolname: Sequelize.STRING,
  email: Sequelize.STRING,
});

module.exports = User;
