var borneo = require("sc-borneo");
var borneoServer = new borneo();
var {graphqlHTTP} = require('express-graphql');
var {buildSchema} = require('graphql');
var fs = require('fs');
borneo.addConnection("borneoMysqlDb", {
  host: "127.0.0.1",
  database: "borneo",
  user: "root",
  password: "23101993",
  driver: "mysql",
  port: "3307"
});

var graphResolver = require('./graph/resolver');

const port = 4000;
const schema = buildSchema(fs.readFileSync("./graph/schema.graphql", {encoding: 'utf8', flag: 'r'}));


borneoServer.expressApp.use('/graphql', graphqlHTTP({schema: schema, rootValue: graphResolver, graphiql: true}));
borneoServer.expressApp.listen(port, console.log(`Running a GraphQL API server at http://localhost:${port}/graphql`));