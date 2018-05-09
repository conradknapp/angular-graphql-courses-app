const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config({ path: "variables.env" });

const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
const { makeExecutableSchema } = require("graphql-tools");

mongoose.connect(process.env.MONGO_URI);
mongoose.connection
  .once("open", () => console.log("Connected to Mongo"))
  .on("error", error => console.error(`Error connecting to Mongo ${error}`));

const { typeDefs } = require("./schema");
const { resolvers } = require("./resolvers");
const courseModel = mongoose.model("course");

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
  cors(),
  bodyParser.json(),
  graphqlExpress({ schema, context: { courseModel } })
);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(4444, () => {
  console.log(`Server listening on PORT 4444`);
});
