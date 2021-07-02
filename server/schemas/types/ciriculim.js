const graphql = require("graphql")
const EducationType = require("./education")
const ProjectType = require("./project")
const SkillType = require("./skill")

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
} = graphql;

const CiriculimType = new GraphQLObjectType({

    name: "Ciriculim",
    fields: {
        id: { type : GraphQLID },
        profil : { type : GraphQLString },
        avatarURL : { type : GraphQLString },
        thumbnailURL : { type : GraphQLString },
        fullName : { type : GraphQLString },
        about : { type : GraphQLString },
        email : { type : GraphQLString },
        phone : { type : GraphQLString },

        educations : {
            type : new GraphQLList(EducationType),
            resolve(parentValue, { id }) {

            }
        },
        projects : {
            type : new GraphQLList(ProjectType),
            resolve(parentValue, { id }) {

            }
        },
        skills : {
            type : new GraphQLList(SkillType),
            resolve(parentValue, { id }) {

            }
        }

    }
})

module.export = CiriculimType;