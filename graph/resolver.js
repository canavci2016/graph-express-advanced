var User = require("./User");
const AdminUserMysql = require("../models/AdminUserMysql");

const root = {
  hello: () => {
    return "Hello world!";
  },
  rollThreeDice: () => {
    return [23, 23];
  },
  userDetail: async ({ id }) => {
    const model = new User();
    await model.find(id);

    return model;
  },

  createUser: async (params, req) => {
    console.log(req.user);

    if (!req.user) {
      throw new Error("user cant be null");
    }

    const user = params.user;

    const model = new User();
    await model.createModel(user);
    return model;
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
