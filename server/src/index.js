import express from "express";
import graphqlHTTP from "express-graphql";

import { GraphQLSchema } from "graphql";
import { RootQueryType } from "./types/root-query";

const PORT = process.env.GQLPORT || 4000;
const cors = require("cors");
const app = express();
const delay = require("express-delay");

app.use(cors());

app.use(delay(1000));

const schema = new GraphQLSchema({
	query: RootQueryType
});

app.use(
	"/",
	graphqlHTTP({
		schema,
		graphiql: true
	})
);

const server = app.listen(PORT, () => {
	console.log(`listening on port:${PORT}`);
});

module.exports = server;
