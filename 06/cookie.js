const http = require("http");
const session = {};
http
  .createServer((req, res) => {
    if (req.url === "/favicon.ico") {
      res.end("");
      return;
    }
    // console.log("cookie:", req.headers.cookie);

    // res.setHeader("Set-cookie", "cookie1=abc;");
    // res.end("hello cookie");
    const sessionKey = "sid";
    const cookie = req.headers.cookie;
    if (cookie && cookie.indexOf(sessionKey) > -1) {
      res.end("Come Back");
      const pattern = new RegExp(`${sessionKey}=([^;]+);?\s*`);
      const sid = pattern.exec(cookie)[1];
      console.log("session", sid, session);
    } else {
      const sid = (Math.random() * 99999999).toFixed();
      res.setHeader("Set-cookie", `${sessionKey}=${sid}`);
      session[sid] = {
        name: "chz",
      };
      res.end("hello cookie");
    }
  })
  .listen(3000);
