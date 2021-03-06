import * as Koa from "koa";
import { get, post, auth } from "../utils/route-decors";
const users = [
  { name: "tom", age: 20 },
  { name: "chz", age: 22 },
];

export default class User {
  @get("/users")
  // @querystring({
  //   age: { type: "int", required: false, max: 200, convertType: "int" },
  // })
  public async list(ctx: Koa.Context) {
    ctx.body = { ok: 1, data: users };
    // const users = await model.findAll()
    // ctx.body = { ok: 1, data: users };
  }
  // @post('/users', {
  //   middlewares: [
  //     async function (ctx, next) {
  //       const name = ctx.request.body.name
  //       if (!name) {
  //         throw "请输入用户名"
  //       }
  //       await next()
  //     }
  //   ]
  // })

  @post("/users")
  // @querystring({
  //   age: { type: "int", required: false, max: 200, convertType: "int" },
  // })
  @auth()
  public add(ctx: Koa.Context) {
    users.push(ctx.request.body);
    ctx.body = { ok: 1 };
  }
}
