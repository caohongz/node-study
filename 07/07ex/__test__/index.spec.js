const { createLoader } = require("../index");
const { resolve } = require("path");
// 暗号：分治算法
test("练习07 实现一个loader", () => {
  const loader = createLoader("config haha");

  const func = loader.initFunction(resolve(__dirname, "../data/func"));
  // console.log("loader", func);

  expect(func.funcA()).toBe("funcA run");
  expect(func.funcB()).toBe("funcB run config is config haha");
});
