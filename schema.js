export default `
    type Query {
        get(key: String!): String
        keys(pattern: String!): [String]
        ttl(key: String!): Int
        pttl(key: String!): Int
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