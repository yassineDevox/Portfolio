//grap GraphQL and loadsh (data manipulation) 
const _ = require("lodash");
const graphql = require("graphql");

//destructring special data type from graphql 
const { GraphQLSchema } = graphql;

//get all queries and mutations 
const RootQueryType = require("./root-query-type")
const Mutations = require("./mutations")

//create our global graphQL schema object and export it as a module 
module.exports = new GraphQLSchema({
    query: RootQueryType,
    mutation : Mutations
})