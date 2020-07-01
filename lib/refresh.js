const fs = require("fs");
const handlebars = require("handlebars");
const chalk = require("chalk");
module.exports = async () => {
  const list = fs
    .readdirSync("./src/views")
    .filter((v) => v !== "Home.vue")
    .map((v) => ({
      name: v.replace(".vue", "").toLowerCase(),
      file: v,
    }));
  compile({ list }, "./src/router.js", "./template/router.js.hbs");
  compile({ list }, "./src/App.vue", "./template/App.vue.hbs");
  /**
   * 编译代码
   * @param {*} meta 数据定义
   * @param {*} filePath 目标文件
   * @param {*} templatePath 模板文件
   */
  function compile(meta, filePath, templatePath) {
    if (fs.existsSync(templatePath)) {
      log;
      const content = fs.readFileSync(templatePath).toString();
      const result = handlebars.compile(content)(meta);
      fs.writeFileSync(filePath, result);
      log;
      log;
      console.log(chalk.green(`🚀${filePath} 创建成功`));
    }
  }
};
