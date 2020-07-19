class Log {
  print(msg) {
    console.log(msg);
  }
}

const dec = (name) => (target, property) => {
  const old = target.prototype.print;
  target.prototype[property] = (msg) => {
    console.log("执行print方法...");
    msg = `{${msg}} ${name}`;
    old(msg);
  };
};

dec("chz")(Log, "print");
log = new Log();
log.print("hello");
