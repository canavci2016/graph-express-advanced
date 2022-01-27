const AdminUserMysql = require("../models/AdminUserMysql");

module.exports = async (req, res, next) => {
  req.user = null;
  if (req.body?.variables?.Token) {
    const token = req.body.variables.Token;
    req.user = await AdminUserMysql.findOne({ where: { email_address: token } });
  }
  next();
};
