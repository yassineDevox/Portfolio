const graphql = require("graphql")

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
} = graphql;

const BlogType = new GraphQLObjectType({

    name: "Blog",
    fields: {
        id: { type : GraphQLID },
        title : { type : GraphQLString },
        description : { type : GraphQLString },
        thumbnail : { type : GraphQLString },
        readDuration : { type : GraphQLString }
    }
})

module.export = BlogType;