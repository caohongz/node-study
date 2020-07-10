<<<<<<< HEAD
const Koa = require("koa");
const app = new Koa();

const config = require("./conf");
const { loadModel } = require("./framework/loader");

loadModel(config)(app);

const bodyParser = require("koa-bodyparser");
app.use(bodyParser());

const restful = require("./framework/router");
app.use(restful);
const port = 3000;
app.listen(port, () => {
  console.log("app listen at " + 3000);
});
=======
const Koa = require('koa')
const app = new Koa()

const config = require('./conf')

const { loadModel } = require('./framework/loader')
loadModel(config)(app)


const bodyParser = require('koa-bodyparser')
app.use(bodyParser())
app.use(require('koa-static')(__dirname + '/'))
const restful = require('./framework/router')
app.use(restful)


const port = 3000
app.listen(port, () => {
    console.log(`app started at port ${port}`)
})
>>>>>>> 42e88e21f12424cbb8dcc1c5b470e4b56b8b1645
