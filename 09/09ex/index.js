module.exports.brackets = (target, property) => {
  const old = target.prototype[property];
  target.prototype[property] = (msg) => {
    msg = `[${msg}]`;
    return old(msg);
  };
};
module.exports.sender = (name) => (target, property) => {
  // 暗号：贪心算法
  const old = target.prototype[property];
  target.prototype[property] = (msg) => {
    msg = `${name} : ${msg}`;
    return old(msg);
  };
};
