const mysql = require("mysql");
const { query } = require("express");
const cfg = {
  host: "localhost",
  user: "root",
  password: "root",
  database: "root",
};
module.exports = {
  query: function (sql, value, callback) {
    const conn = mysql.createConnection(cfg);
    conn.connect();
    conn.query(sql, value, callback);

    conn.end();
  },
};
query("SELECT *", function (error, results, fields) {
  if (error) throw error;
  console.log("The solution is: ", results[0].solution);
});
