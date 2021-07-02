const axios = require("axios")
const graphql = require("graphql")
const LyricType = require("./lyric")

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
} = graphql;

const SongType = new GraphQLObjectType({
    name: "Song",
    fields: {
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        actor: { type: GraphQLString },
        thumbnailURL: { type: GraphQLString },
        lyrics : {
            type : new GraphQLList(LyricType),
            resolve(parentValue,{id}){
                return axios
                .get(`/songs/${parentValue.id}/lyrics/${id}`)
                .then(res=>res.data)
            }
             
        }
    }
})

module.export = SongType;