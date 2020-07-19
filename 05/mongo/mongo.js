(async () => {
  const { MongoClient } = require("mongodb");
  const client = new MongoClient("mongodb://localhost:27017", {
    useNewUrlParser: true,
  });
  let ret = await client.connect();
  // console.log("conn", ret);
  const db = client.db("test");
  const fruits = db.collection("fruits");
  ret = await fruits.insertOne({
    name: "芒果",
    price: 20.1,
  });
  // ret = await fruits.deleteMany({ name: "芒果" });
  console.log("插入成功", JSON.stringify(ret));
  ret = await fruits.findOne();
  console.log("查询文档", ret);
  ret = await fruits.updateOne(
    { name: "芒果" },
    {
      $set: {
        name: "苹果",
      },
    }
  );
  client.close();
})();
