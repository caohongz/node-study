const http = require("http");
const fs = require("fs");
const path = require("path");
http
  .createServer((req, res) => {
    const { method, url, headers } = req;
    console.log("url", url, method);
    console.log("cookie", headers.cookie);
    if (method == "GET" && url == "/") {
      // 注意当前的执行目录，最好是转换成绝对路径，不然容易找不到文件
      const pathname = path.resolve(__dirname, "index.html");
      fs.readFile(pathname, (err, data) => {
        if (err) {
          console.log("err", err);
          return;
        }
        res.setHeader("Content-Type", "text/html");
        res.end(data);
      });
    } else if (method == "GET" && url == "/api/users") {
      // res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
      // res.setHeader("Access-Control-Allow-Credentials", "true");
      res.setHeader("Set-Cookie", "cookie1=Va222");
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ name: "tom", age: 20 }));
    }
    // else if (method === "OPTIONS" && url === "/api/users") {
    //   res.writeHead(200, {
    //     "Access-Control-Allow-Origin": "http://localhost:3000",
    //     "Access-Control-Allow-Credentials": "true",
    //     "Access-Control-Allow-Headers": "X-Token,application/json",
    //     "Access-Control-Allow-Methods": "PUT",
    //   });
    //   res.end();
    // }
    else if (method == "POST" && url == "/api/save") {
      let reqData = [];
      let size = 0;
      req.on("data", (data) => {
        reqData.push(data);
        size += data.length;
      });
      req.on("end", function () {
        // Buffer.concat接受两个参数，第一个是数据数组，第二个是totalLength
        const data = Buffer.concat(reqData, size);
        console.log("data: ", size, data.toString());
        res.end(`formdata: ${data.toString()}`);
      });
    }
  })
  .listen(4000, () => {
    console.log("api listen at 4000");
  });
