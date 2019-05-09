export default `
    type Query {
        get(key: String!): String
    }

    type Mutation {
        set(key: String!, value: String!): Boolean!
        del(key: String!): Boolean!
        incr(key: String!): Boolean!
        decr(key: String!): Boolean!
        expire(key: String!, seconds: Int!): Boolean!
        rename(key: String!, newkey: String!): Boolean!
    }
`