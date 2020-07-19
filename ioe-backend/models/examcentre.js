const Sequelize = require("sequelize");
const sequelize = require("../conf/db");

const Examcentre = sequelize.define("examcentre", {
  id: {
    type: Sequelize.INTEGER,
    autoIncreament: true,
    allowNull: false,
    primaryKey: true,
  },
  ticketnum: Sequelize.INTEGER,
});

module.exports = Examcentre;
