const fs = require("fs");

function get(key) {
  fs.readFile("./db.json", (err, data) => {
    const json = JSON.parse(data);
    console.log("get", json[key]);
  });
}

function set(key, value) {
  fs.readFile("./db.json", (err, data) => {
    const json = data ? JSON.parse(data) : {};
    console.log("data", json);

    json[key] = value;
    fs.writeFile("./db.json", JSON.stringify(json), (err) => {
      if (err) {
        console.log(err);
      }
      console.log("写入成功");
    });
  });
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (input) {
  const [op, key, value] = input.split(" ");
  if (op === "get") {
    get(key);
  } else if (op === "set") {
    set(key, value);
  } else if (op === "quit") {
    rl.close();
  } else {
    console.log("无效操作");
  }
});
rl.on("close", () => {
  console.log("程序结束");
  process.exit(0);
});
