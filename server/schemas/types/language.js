const graphql = require("graphql")
const axios = require("axios")
const API = require("../../Api/api-providers")

const {GraphQLObjectType,GraphQLString,GraphQLID} = graphql

const LanguageType = new GraphQLObjectType({

    name:"Language",
    fields:{
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        flagURL:{
            type:GraphQLString,
            resolve(parentValue,args){
                return axios.get(API.FLAG_URL)
            }
        }
    }
})