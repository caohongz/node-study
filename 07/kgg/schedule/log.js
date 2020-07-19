module.exports = {
  interval: "* * * * * ? *",
  handler() {
    console.log("定时任务 嘿嘿 三秒一次" + new Date());
  },
};
