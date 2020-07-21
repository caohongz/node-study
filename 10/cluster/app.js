const http = require("http");
const server = http.createServer((req, res) => {
  Math.random() > 0.9 ? aw() : "2";
  res.end("Hello");
});

if (!module.parent) {
  server.listen(3000, () => {
    console.log("server started at 3000");
  });
} else {
  module.exports = server;
}
