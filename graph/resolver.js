var RandomDie = require("./RandomDie");
var User = require("./User");

const root = {
  hello: () => {
    return "Hello world!";
  },
  rollThreeDice: () => {
    return [23, 23];
  },
  rollDice: (c) => {
    return [23, 23];
  },
  getDie: ({ numSides }) => {
    return new RandomDie(numSides || 6);
  },

  userDetail: async ({ id }) => {
    const model = new User();
    await model.find(id);

    return model;
  },

  createUser: async ({ user }) => {
    const model = new User();
    await model.createModel(user);
    return model;
  },

  allUsers: () => {
    return [new RandomDie(6), new RandomDie(2)];
  }
};

module.exports = root;