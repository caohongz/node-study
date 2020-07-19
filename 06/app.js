const Koa = require("koa");
const app = new Koa();
const session = require("koa-session");

const redisStore = require("koa-redis");
const redis = require("redis");
const redisClient = redis.createClient(6379, "localhost");

const wrapper = require("co-redis");
const client = wrapper(redisClient);

app.keys = ["some secret"];

const SESS_CONFIG = {
  key: "kkb:sess",
  signed: true,
  store: redisStore({ client }),
};
app.use(session(SESS_CONFIG, app));
app.use(async (ctx, next) => {
  const keys = await client.keys("*");
  keys.forEach(async (key) => {
    console.log(key + ":" + (await client.get(key)));
  });
  await next();
});
app.use((ctx) => {
  if (ctx.path === "/favicon.ico") return;
  let n = ctx.session.count || 0;
  ctx.session.count = ++n;
  ctx.body = `第${n}次访问`;
});
app.listen(3000);
