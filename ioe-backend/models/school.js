const Sequelize = require("sequelize");
const sequelize = require("../conf/db");

const School = sequelize.define("school", {
  id: {
    type: Sequelize.INTEGER,
    autoIncreament: true,
    allowNull: false,
    primaryKey: true,
  },
  schoolname: Sequelize.STRING,
  schooltype: Sequelize.STRING,
  schoolsubtype: Sequelize.STRING,
  schoolcode: Sequelize.INTEGER,
});

module.exports = School;
