<<<<<<< HEAD
const router = require("koa-router")();
const { init, get, create, update, del, list } = require("./api");

router.get("/api/:list/:id", init, get);
router.get("/api/:list", init, list);
router.post("/api/:list", init, create);
router.put("/api/:list/:id", init, update);
router.delete("/api/:list/:id", init, del);

module.exports = router.routes();
=======
const router = require('koa-router')()
const {
    init, get, create, update, del,list
} = require('./api')

router.get('/api/:list/:id', init, get)
router.get('/api/:list', init, list)
router.post('/api/:list', init,create)
router.put('/api/:list/:id', init, update)
router.delete('/api/:list/:id', init, del)

module.exports = router.routes()
>>>>>>> 42e88e21f12424cbb8dcc1c5b470e4b56b8b1645
