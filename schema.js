export default `
    type Query {
        get      ( key: String! ): String
        getrange ( key: String!, start: Int!, end: Int! ): String
        keys     ( pattern: String! ): [String]!
        mget     ( keys: [String!]! ): [String]
        pttl     ( key: String! ): Int!
        strlen   ( key: String! ): Int!
        ttl      ( key: String! ): Int!
    }

    type Mutation {
        append   ( key: String!, value: String! ): Int!
        decr     ( key: String! ): Int!
        decrby   ( key: String!, decrement: Int! ): Int!
        del      ( key: String! ): Int!
        expire   ( key: String!, seconds: Int! ): Int!
        incr     ( key: String! ): Int!
        incrby   ( key: String!, increment: Int! ): Int!
        rename   ( key: String!, newkey: String! ): Boolean!
        renamenx ( key: String!, newkey: String! ): Int!
        set      ( key: String!, value: String! ): Boolean!
        setex    ( key: String!, seconds: Int!, value: String! ): String!
        setnx    ( key: String!, value: String! ): Boolean!
        setrange ( key: String!, offset: Int!, value: String! ): Int!
    }
`