const Sequelize = require("sequelize");
const sequelize = require("../conf/db");

const Teacher = sequelize.define("teacher", {
  id: {
    type: Sequelize.INTEGER,
    autoIncreament: true,
    allowNull: false,
    primaryKey: true,
  },
  name: Sequelize.STRING,
  schoolname: Sequelize.STRING,
});

module.exports = Teacher;
