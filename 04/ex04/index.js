const Sequelize = require("sequelize");
module.exports.initModel = async (sequelize) => {
  // 暗号：哈希算法
  const User = sequelize.define("user", {
    name: Sequelize.STRING,
  });
  const Product = sequelize.define("product", {
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });
  Product.belongsTo(User);
  User.hasMany(Product);
  // ##END##
  return { User, Product };
};
