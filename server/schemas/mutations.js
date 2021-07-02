const graphql = require("graphql")
const axios = require("axios")
const LyricType = require('./types/lyric')
const SongType = require('./types/experience')

const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;

const Mutation = new GraphQLObjectType({

    name: "Mutation",
    fields: {
        //operations for admin dashboard app
    }
})

module.export = Mutation;