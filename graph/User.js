const AdminUserMysql = require("../models/AdminUserMysql");

class User {

  constructor() {
  }

  async find(id) {
    this.user = await AdminUserMysql.findByPk(id);
  }

  name() {
    return this.user.name;
  }

  last_name() {
    return this.user.middle_name;
  }

  async friends({skip, take}) {
    console.log(skip,take);
    const userList = await AdminUserMysql.findAll();
    return userList.map(c => {
      let usr = new User();
      usr.user = c;
      return usr;
    });
  }

  get user() {
    return this._user || {name: "UNKNOWN", middle_name: "UNKNOWN"};
  }

  set user(val) {
    this._user = val;
  }


}

module.exports = User;