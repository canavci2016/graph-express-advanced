var User = require("./User");
const AdminUserMysql = require("../models/AdminUserMysql");

const root = {
  hello: () => {
    return "Hello world!";
  },

  rollThreeDice: () => {
    return [23, 23];
  },

  deleteUser: async ({ id }, req) => {
    const user = await AdminUserMysql.findByPk(id);

    if (!user) throw new Error("User doesnt exist");

    const res = await user.destroy();

    return res;
  },

  createUser: async (params, req) => {
    console.log(req.user);

    if (!req.user) {
      throw new Error("user cant be null");
    }

    const user = await AdminUserMysql.create(params.user);
    const model = new User(user);
    return model;
  },

  userDetail: async ({ id }) => {
    const user = await AdminUserMysql.findByPk(id);
    return new User(user);
  },

  allUsers: async (params) => {
    const { skip = 0, take = 10 } = params;
    const userList = await AdminUserMysql.findAll({
      offset: skip,
      limit: take,
    });
    return userList.map((c) => new User(c));
  },
};

module.exports = root;
