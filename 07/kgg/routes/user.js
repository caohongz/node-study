module.exports = {
  // "get /": async (ctx) => {
  //   ctx.body = "用户首页";
  // },
  // "get /info": async (ctx) => {
  //   ctx.body = "用户详情页";
  // },
  "get /": async (app) => {
    const name = await app.$service.user.getName();
    app.ctx.body = name;
  },
  "get /info": (app) => {
    app.ctx.body = "年龄：" + app.$service.user.getAge();
  },
};
