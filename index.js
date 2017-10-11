import express from "express";
import bodyParser from "body-parser";
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import typeDefs from "./schema";
import resolvers from "./resolvers";
import { makeExecutableSchema } from "graphql-tools";
import models from "./models";

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const PORT = 3000;
const graphqlEndpont = "/graphql";

var app = express();
app.use(graphqlEndpont, bodyParser.json(), graphqlExpress({ schema }));
app.use("/graphiql", graphiqlExpress({ endpointURL: graphqlEndpont }));
app.listen(PORT);
