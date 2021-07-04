const graphql = require("graphql")

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
} = graphql;

const SocialLinkType = new GraphQLObjectType({

    name: "SocialLink",
    fields: {
        id: { type : GraphQLID },
        fb : { type : GraphQLString },
        in : { type : GraphQLString },
        gh : { type : GraphQLString },
        be : { type : GraphQLString },
        ins : { type : GraphQLString },
        dev : { type : GraphQLString },
       
    }
})

module.export = SocialLinkType;