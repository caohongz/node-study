const { EventEmitter } = require("events");
// 暗号:搜索算法
module.exports = class Connection {
  constructor() {
    this.handler = [];
  }
  onConn(arg) {
    console.log("event", arg);
    this.handler.push(arg);
  }
  connection(...arg) {
    if (this.handler.length !== 0) {
      for (var i = 0; i < this.handler.length; i++) {
        console.log("args", ...arg);
        this.handler[i](...arg);
      }
    }
  }
};
