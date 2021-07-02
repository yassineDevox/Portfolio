const graphql = require("graphql")

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
} = graphql;

const ExperienceType = new GraphQLObjectType({
    name: "Education",
    fields: {
        id: { type: GraphQLID },
        dateDebut: { type: GraphQLString },
        dateFin: { type: GraphQLString },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        thumbnailURL: { type: GraphQLString }
    }
})

module.export = ExperieceType;