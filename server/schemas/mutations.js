const graphql = require("graphql")
const axios = require("axios")
const LyricType = require('./types/lyric')
const SongType = require('./types/song')

const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;

const RootQueryType = new GraphQLObjectType({

    name: "Mutation",
    fields: {
        addSong: {
            type: SongType,
            args: {
                title: { type: GraphQLString }
            },
            resolve(parentValue, args) {

                
            }
        },
        addLyricToSong: {
            type: SongType, args: {
                content: { type: GraphQLString },
                songId: { type: GraphQLID }
            },
            resolve(parentValue, args) {

                
            }
        },
        likeLyric: {
            type: LyricType,
            args: { id: { type: GraphQLID } },
            resolve(parentValue, args) {


            }
        },
        deleteSong: {
            type: SongType,
            args: { id: { type: GraphQLID } },
            resolve(parentValue, args) {


            }
        },
    }
})

module.export = RootQueryType;