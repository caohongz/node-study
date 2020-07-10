module.exports = {
  async init(ctx, next) {
    const model = ctx.app.$models[ctx.params.list];
    if (model) {
      ctx.list = model;
      await next();
    } else {
      ctx.body = "no this model";
    }
  },
  async list(ctx) {
    ctx.body = await ctx.list.find({});
  },
};
