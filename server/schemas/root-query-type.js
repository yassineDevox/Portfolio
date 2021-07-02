const graphql = require("graphql");
const LyricType = require('./types/lyric')
const SongType = require('./types/song')
const LanguageType = require('./types/language')
const { GraphQLObjectType } = graphql;

const RootQueryType = new GraphQLObjectType({
    name: "Root",
    fields: {
        lyric: {
            type: LyricType
        },
        song: {
            type: SongType
        },
        language: {
            type: LanguageType
        }
    }
})

module.export = RootQueryType;