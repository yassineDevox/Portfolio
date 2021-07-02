const graphql = require("graphql")
const axios = require("axios")
const LanguageType = require("../types/language")

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLID,
} = graphql;

const LyricType = new GraphQLObjectType({
    name:"Lyric",
    fields:{
        id:{type:GraphQLID},
        content:{type:GraphQLString},
        language:{
            type : new GraphQLList(LanguageType)
            
        },
    }
})

module.export = LyricType;