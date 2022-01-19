const {database: {getConnection, DataTypes}} = require("sc-borneo");
const database = require("../configs/database");

const Model = getConnection(database.borneoMysqlDb.key).instance.define('AdminUser', {
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
