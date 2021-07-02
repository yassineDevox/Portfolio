const axios = require("axios")
const graphql = require("graphql")

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
} = graphql;

const EducationType = new GraphQLObjectType({
    name: "Education",
    fields: {
        id: { type: GraphQLID },
        dateDebut: { type: GraphQLString },
        dateFin: { type: GraphQLString },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
       
        }
})

module.export = EducationType;