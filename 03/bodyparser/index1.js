const Koa = require("koa");
const app = new Koa();
// 实际不需要koa-bodyparser
const router = require("koa-router")();
// 暗号：二分查找
app.use(require("koa-static")(__dirname + "/"));
app.use(async (ctx, next) => {
  console.log("body-parser......");

  await new Promise((reslove, reject) => {
    let reqData = [];
    let size = 0;
    const req = ctx.request.req;
    req.on("data", (data) => {
      reqData.push(data);
      size += data.length;
    });
    req.on("end", function () {
      const data = Buffer.concat(reqData, size);
      console.log("reqData", data.toString());

      ctx.request.body = data.toString();
      reslove();
    });
  });
  await next();
});

router.post("/add", (ctx, next) => {
  console.log(">>>parseing ", ctx.request.body);
  ctx.body = ctx.request.body;
  console.log("ctx.body", ctx.body);
  next();
});
app.use(router.routes());
app.listen(3000);
