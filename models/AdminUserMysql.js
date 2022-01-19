const {model, DataTypes} = require("./MysqlBaseModel");

const Model = model.define('AdminUser', {
  id: {type: DataTypes.INTEGER, field: 'id', primaryKey: true},
  name: {type: DataTypes.STRING},
  middle_name: DataTypes.STRING,
  email_address: {type: DataTypes.STRING, allowNull: false},
}, {
  tableName: "users",
  createdAt: false,
  updatedAt: false,
  setterMethods: {},
  getterMethods: {}
});

module.exports = Model;
