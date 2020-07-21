const cluster = require("cluster");
const os = require("os");
const numCPUs = os.cpus().length;
const process = require("process");

const workers = {};
if (cluster.isMaster) {
  for (let i = 0; i < numCPUs; i++) {
    const worker = cluster.fork();
    console.log("init...pid", worker.process.pid);
    workers[worker.process.pid] = worker;
  }
  cluster.on("exit", (worker, code, signal) => {
    console.log("工作进程 关闭......");
    delete worker[worker.process.pid];
    worker = cluster.fork();
    workers[worker.process.pid] = worker;
  });
} else {
  const app = require("./app");
  app.listen(3000);
}

process.on("SIGTERM", () => {
  for (let pid in workers) {
    process.kill(pid);
  }
  process.exit(0);
});

require("./test");
