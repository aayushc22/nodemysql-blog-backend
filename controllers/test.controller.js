const User = require("../models/user");

async function test(req, res) {
  const user = await User.findByPk(7);
  res.status(200).json({
    data: user,
  });
}
module.exports = { test: test };
