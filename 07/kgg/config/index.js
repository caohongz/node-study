const { model } = require("mongoose");

module.exports = {
  db: {
    dialect: "mysql",
    host: "localhost",
    database: "test",
    username: "test",
    password: "testtest",
  },
  middleware: ["logger"],
};
