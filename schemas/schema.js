//grap GraphQL and axios

const graphql = require("graphql");
const axios = require("axios");

//destructringspecial data type from graphql 
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQlInt,
    GraphQLSchema
} = graphql;

//  define company type
const CompanyType = new GraphQLObjectType({
    name: "Company",
    fields:()=> ({//execute this function until the entire file was executed !!
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        users: {
            type:new GraphQLList(),
            resolve(parentValue,args){
                return axios
                    .get( `/companies/${parentValue.id}/users` )
                    .then( res => res.data )
            }
        }
    })
})


//define user type 
const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        id: { type: GraphQLString },
        firstName: { type: GraphQLString },
        age: { type: GraphQlInt },
        company: {
            type: CompanyType,
            resolve(parentValue, args) {
                //{id:"23",firstName:"dazd",age:"23",companyId:'1'}
                // console.log(parentValue,args);
                axios
                    .get(`/companies/${parentValue.companyId}`)
                    .then(res => res.data)

            }
        },
    }),

})

// define Root Type Query
const RootQuery = new GraphQLObjectType({
    name: 'RootTypeQuery',
    fields: {
        user: {
            type: UserType,
            args: { id: { type: GraphQLString } },
            resolve(_, args) {
                return axios
                    .get(`/users/${args.id}`)
                    .then(res => res.data);
            }
        },
        company: {
            type: CompanyType,
            args: { id: { type: GraphQLString } },
            resolve(args) {
                return axios
                    .get(`/companies/${args.id}`)
                    .then(res => res.data);
            }
        }
    }
})

// define mutation for crd operations
const mutation = new GraphQLObjectType({
    name:"mutation",
    fields:{
      addUser:{
          type:UserType,
          args:{
              //graphQL will provide some info in docs section !(required)
              firstName:{type:new GraphQLNonNull(GraphQLString)},
              age:{type:new GraphQLNonNull(GraphQLString)},
              companyId:{type:GraphQLString}
          },
          resolve(parventValue,{firstName,age}){
            return axios
            .post('/users',{firstName,age})
            .then(res=>res.data)
          }
      },
      deleteUser:{
        type:UserType, //always expect getting something back (des GraphQL)
        args:{ 
            id:{type:new GraphQLNonNull(GraphQLString)},
        },
        resolve(parventValue,{id}){
          return axios
          .delete(`/users/${id}`)
          .then(res=>res.data)
        }
    },
    editUser:{
        type:UserType,
        args:{
            id:{type:new GraphQLNonNull(GraphQLString)},
            firstName:{type:new GraphQLString},
            age:{type:new GraphQLString},
            companyId:{type:GraphQLString}
        },
        resolve(parventValue,args) {
            return axios
            //just edit that specific props that were mentioned on the args 
            .patch(`/users/${args.id}`,args)
            .then(res=>res.data)
        }
    }

    }
})

module.exports = new GraphQLSchema({
    query:RootQuery,
    mutation

})