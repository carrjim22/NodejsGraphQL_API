import {makeExecutableSchema} from 'graphql-tools';
import {resolvers} from './resolvers';
const typeDefs = `
    type Query {
        getProducts: [Product]
        getProduct(_id: ID): Product
    }

    type Mutation{
        createProduct(input:inputProduct) : Product
        updateProduct(_id:ID, input:inputProduct): Product
        deleteProduct(_id:ID): Product  
    }
    type Product{
        _id:ID
        productName: String
        description: String
        price: Int
    }
    input inputProduct{
        productName: String
        description: String
        price: Int
    }
`

export default makeExecutableSchema({
    typeDefs:typeDefs,
    resolvers:resolvers
})