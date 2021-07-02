const graphql = require("graphql");
const CiriculimType = require('./types/ciriculim')
const { GraphQLObjectType } = graphql;

const RootQueryType = new GraphQLObjectType({
    name: "Root",
    fields: {
       ciriculim:CiriculimType
    }
})

module.export = RootQueryType;