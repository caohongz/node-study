const app = new (require("koa"))();
const bodyParser = require("koa-bodyparser");
app.use(require("koa-static")(__dirname + "/"));
app.use(bodyParser());

const sequelize = require("./conf/db");
const User = require("./models/user");
const School = require("./models/school");
const Examcentre = require("./models/examcentre");
const Application = require("./models/application");
const Teacher = require("./models/teacher");
const Subject = require("./models/subject");
// const Admin = require("./models/admin");

app.use(async (ctx, next) => {
  const user = await User.findByPk(1);
  ctx.user = user;
  await next();
});

const router = require("koa-router")();

app.use(router.routes());

// User.hasOne(School);
// User.hasOne(Teacher);
User.belongsToMany(Subject, { through: Application });
User.hasMany(Examcentre);
User.hasMany(Application);
Subject.belongsToMany(User, { through: Application });
School.hasMany(User);
Teacher.hasOne(School);
Teacher.hasMany(User);
// Application.hasOne(User);
Application.hasOne(Examcentre);
// Examcentre.hasOne(Application);
// Examcentre.hasOne(Subject);
// Examcentre.hasOne(User);

// Application.hasOne(Subject);
// { force: true }
sequelize.sync().then(async (result) => {
  let user = await User.findByPk(1);
  if (!user) {
    user = await User.create({
      name: "曹洪智",
      schoolname: "北京大学",
    });
    await user.createSchool();
  }
  app.listen(3000, () => console.log("Listening to port 3000"));
});
