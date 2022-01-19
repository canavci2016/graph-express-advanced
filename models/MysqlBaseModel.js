const {database: {getConnection, ...sequelizeKeys}} = require("sc-borneo");
const database = require("../configs/database");

module.exports = {
  model: getConnection(database.borneoMysqlDb.key).instance,
  ...sequelizeKeys
};
