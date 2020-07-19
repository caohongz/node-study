// const { compose } = require(".");

const e = require("express");

// function b(arg) {
//   console.log("arg", arg.toString());
//   return arg;
// }
// function next() {}
// // 箭头函数不加{}默认返回跟着得语句
// abc = (next) => () => b(next);

// ab = abc(next)();
// // ab(next);
// console.log("test", ab.toString());

module.exports = compose = (middlewares) => {
  // return (next = async () => {}) =>
  //   middlewares.reduce((a, b) => (...arg) => a(() => b(...arg)))(next);
  c = async function next() {};
  return function d(arg) {
    let e = middlewares.reduce(function (a, b) {
      return (arg) => a(() => b(arg));
    });
    return e(c);
  };
};

const middlewares = [
  (next) => {
    console.log("test", next.toString());
    next();
  },
  (next) => {
    console.log("test1", next.toString());

    next();
  },
];
compose(middlewares)();
