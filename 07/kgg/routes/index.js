module.exports = (app) => ({
  // "get /": async (ctx) => {
  //   ctx.body = "首页";
  // },
  "get /": app.$ctrl.home.index,
  // "get /detail": async (ctx) => {
  //   ctx.body = "详细页面";
  // },
  "get /info": app.$ctrl.home.detail,
});
