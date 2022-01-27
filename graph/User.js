const AdminUserMysql = require("../models/AdminUserMysql");

class User {
  constructor(user = null) {
    this.user = user;
  }

  async find(id) {
    this.user = await AdminUserMysql.findByPk(id);
  }

  name() {
    return this.user.name;
  }

  id() {
    return this.user.id;
  }

  last_name() {
    return this.user.middle_name;
  }

  email_address() {
    return this.user.email_address;
  }

  async createModel(user) {
    this._user = await AdminUserMysql.create(user);
  }

  async friends({ skip, take }) {
    const userList = await AdminUserMysql.findAll({
      offset: skip,
      limit: take,
    });
    return userList.map((c) => new User(c));
  }

  get user() {
    return this._user || { name: "UNKNOWN", middle_name: "UNKNOWN", id: 0 };
  }

  set user(val) {
    this._user = val;
  }
}

module.exports = User;
