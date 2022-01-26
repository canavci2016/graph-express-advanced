var borneo = require("sc-borneo");
var borneoServer = new borneo();
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
var fs = require('fs');
const database = require("./configs/database");
const port = 4000;
borneo.addConnection(database.borneoMysqlDb.key, database.borneoMysqlDb.connection);

borneoServer.expressApp.use('/graphql', graphqlHTTP({
    schema: buildSchema(fs.readFileSync("./graph/schema.graphql", { encoding: 'utf8', flag: 'r' })),
    rootValue: require('./graph/resolver'),
    graphiql: true
}));



borneoServer.expressApp.listen(port, console.log(`Running a GraphQL API server at http://localhost:${port}/graphql`));