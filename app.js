var borneo = require("sc-borneo");
var borneoServer = new borneo();
var { graphqlHTTP } = require("express-graphql");
var { buildSchema } = require("graphql");
var fs = require("fs");
const database = require("./configs/database");
const { PORT } = require("./configs/common");

borneoServer.expressApp.use(borneo.express.json());

borneo.addConnection(
  database.borneoMysqlDb.key,
  database.borneoMysqlDb.connection
);

borneoServer.expressApp.use((req, res, next) => {
  if (req.body?.variables?.Token) {
    const token = req.body.variables.Token;
    console.log("token is : " + token);
  }
  req.user = Date.now().toString();
  next();
});

borneoServer.expressApp.use(
  "/graphql",
  graphqlHTTP((request) => {
    return {
      schema: buildSchema(
        fs.readFileSync("./graph/schema.graphql", {
          encoding: "utf8",
          flag: "r",
        })
      ),
      rootValue: require("./graph/resolver"),
      graphiql: true,
    };
  })
);

borneoServer.expressApp.listen(
  PORT,
  console.log(
    `Running a GraphQL API server at http://localhost:${PORT}/graphql`
  )
);
