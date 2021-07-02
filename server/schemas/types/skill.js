const graphql = require("graphql")

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
} = graphql;

const SkillType = new GraphQLObjectType({
    name: "Skill",
    fields: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        flagURL: { type: GraphQLString }
    }
})

module.export = SkillType;