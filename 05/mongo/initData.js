const mongodb = require("./models/db");

mongodb.once("connect", async () => {
  console.log("connect success ...");
  const fruits = mongodb.col("fruits");
  await fruits.deleteMany();
  const data = new Array(100).fill().map((k, v) => {
    return {
      name: "XXXX" + v,
      price: v,
      category: Math.random() > 0.5 ? "蔬菜" : "水果",
    };
  });
  await fruits.insertMany(data);
  console.log("插入成功");
});
