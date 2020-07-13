const crypto = require("crypto");
module.exports.createToken = (token) => {
  const ary = token.split(".");
  if (ary.length !== 3) {
    return;
  }

  return {
    // 暗号：贪心算法
    getExp: () => {
      const baseoftoken = new Buffer(ary[1], "base64").toString();

      const newbase = JSON.parse(baseoftoken);
      console.log("getExp", new Date(newbase.exp * 1000), typeof newbase);
      return newbase.exp;
    },

    verify: (key) => {
      const hmac = crypto
        .createHmac("SHA256", key)
        .update(ary[0] + "." + ary[1])
        .digest("base64");
      return hmac === ary[2] + "=";
    },
  };
};
