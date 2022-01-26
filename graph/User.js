const AdminUserMysql = require("../models/AdminUserMysql");

class User {
  constructor() {}

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

  async createModel(user) {
    this._user = await AdminUserMysql.create(user);
  }

  async friends({ skip, take }) {
    console.log(skip, take);
    const userList = await AdminUserMysql.findAll();
    return userList.map((c) => {
      let usr = new User();
      usr.user = c;
      return usr;
    });
  }

  get user() {
    return this._user || { name: "UNKNOWN", middle_name: "UNKNOWN", id: 0 };
  }

  set user(val) {
    this._user = val;
  }
}

module.exports = User;