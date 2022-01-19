const AdminUserMysql = require("../models/AdminUserMysql");

class RandomDie {
  constructor(id) {
    console.log(numSides);
    this.numSides = numSides;
  }

  async name(cc) {
    console.log(cc);
    let items = await AdminUserMysql.findAll();
    items = items.map(l => l.name);
    return items[Math.floor(Math.random() * items.length)];
  }

  async roll({numRolls}) {
    const ls = await AdminUserMysql.findAll();
    return ls.map(l => l.name);
  }

}

module.exports = RandomDie;