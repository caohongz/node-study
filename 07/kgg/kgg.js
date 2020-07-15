const Koa = require("koa");
const {
  initRouter,
  initController,
  initService,
  loadConfig,
  initSchedule,
} = require("./kgg-loader");

class KGG {
  constructor(conf) {
    this.$app = new Koa();
    loadConfig(this);
    this.$ctrl = initController(this);
    this.$service = initService(this);
    this.$router = initRouter(this);
    this.$app.use(this.$router.routes());
    initSchedule();
  }
  start(port) {
    this.$app.listen(port, () => {
      console.log("KGG Start at " + port);
    });
  }
}
module.exports = KGG;
