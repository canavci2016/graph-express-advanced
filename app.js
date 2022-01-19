var borneo = require("sc-borneo");
var borneoServer = new borneo();
var {graphqlHTTP} = require('express-graphql');
var {buildSchema} = require('graphql');
var fs = require('fs');
const database = require("./configs/database");
const port = 4000;
borneo.addConnection(database.borneoMysqlDb.key, database.borneoMysqlDb.connection);

var graphResolver = require('./graph/resolver');
const schema = buildSchema(fs.readFileSync("./graph/schema.graphql", {encoding: 'utf8', flag: 'r'}));


borneoServer.expressApp.use('/graphql', graphqlHTTP({schema: schema, rootValue: graphResolver, graphiql: true}));
borneoServer.expressApp.listen(port, console.log(`Running a GraphQL API server at http://localhost:${port}/graphql`));