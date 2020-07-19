const Sequelize = require("sequelize");
const sequelize = require("../conf/db");

const Subject = sequelize.define("subject", {
  id: {
    type: Sequelize.INTEGER,
    autoIncreament: true,
    allowNull: false,
    primaryKey: true,
  },
  subjectname: Sequelize.STRING,
});

module.exports = Subject;
