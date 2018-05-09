const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
const { makeExecutableSchema } = require("graphql-tools");

mongoose.connect(
  "mongodb://cknapp92:Spike1992@ds237815.mlab.com:37815/angular-graphql-express"
);
mongoose.connection
  .once("open", () => console.log("Connected to Mongo"))
  .on("error", error => console.error(`Error connecting to Mongo ${error}`));

const { typeDefs } = require("./schema");
const { resolvers } = require("./resolvers");
const { model } = require("./models/Course");

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

app.use(
  "/graphiql",
  graphiqlExpress({
    endpointURL: "/graphql"
  })
);

app.use(
  "/graphql",
  cors,
  bodyParser.json(),
  graphqlExpress({ schema, context: { model } })
);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(4444, () => {
  console.log(`Server listening on PORT 4444`);
});
