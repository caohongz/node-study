const Koa = require("koa");
const app = new Koa();
const router = require("koa-router")();

app.use(require("koa-static")(__dirname + "/"));
app.use(async (ctx, next) => {
  await new Promise((reslove, reject) => {
    const req = ctx.request.req;
    let reqData = [];
    let size = 0;
    req.on("data", (data) => {
      reqData.push(data);
      size += data.length;
    });
    req.on("end", function () {
      ctx.request.body = reqData.toString();
      reslove();
    });
  });
  await next();
});
router.post("/add", async (ctx, next) => {
  console.log("body", ctx.request.body);

  ctx.body = ctx.request.body;
  console.log(ctx.body);

  await next();
});
app.use(router.routes());
app.listen(3000);
