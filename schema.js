export default `
    type Query {
        """Get the value of key. If the key does not exist the special value nil is returned. An error is returned if the value stored at key is not a string, because GET only handles string values."""
        get      ( key: String! ): String
        """Returns the substring of the string value stored at key, determined by the offsets start and end (both are inclusive). Negative offsets can be used in order to provide an offset starting from the end of the string. So -1 means the last character, -2 the penultimate and so forth."""
        getrange ( key: String!, start: Int!, end: Int! ): String
        """Returns all keys matching pattern."""
        keys     ( pattern: String! ): [String]!
        """Returns the values of all specified keys. For every key that does not hold a string value or does not exist, the special value nil is returned. Because of this, the operation never fails."""
        mget     ( keys: [String!]! ): [String]
        """Like TTL this command returns the remaining time to live of a key that has an expire set, with the sole difference that TTL returns the amount of remaining time in seconds while PTTL returns it in milliseconds."""
        pttl     ( key: String! ): Int!
        """Returns the length of the string value stored at key. An error is returned when key holds a non-string value."""
        strlen   ( key: String! ): Int!
        """Returns the remaining time to live of a key that has a timeout. This introspection capability allows a Redis client to check how many seconds a given key will continue to be part of the dataset."""
        ttl      ( key: String! ): Int!
    }

    type Mutation {
        """If key already exists and is a string, this command appends the value at the end of the string. If key does not exist it is created and set as an empty string, so APPEND will be similar to SET in this special case."""
        append   ( key: String!, value: String! ): Int!
        """Decrements the number stored at key by one. If the key does not exist, it is set to 0 before performing the operation. An error is returned if the key contains a value of the wrong type or contains a string that can not be represented as integer. This operation is limited to 64 bit signed integers."""
        decr     ( key: String! ): Int!
        """Decrements the number stored at key by decrement. If the key does not exist, it is set to 0 before performing the operation. An error is returned if the key contains a value of the wrong type or contains a string that can not be represented as integer. This operation is limited to 64 bit signed integers."""
        decrby   ( key: String!, decrement: Int! ): Int!
        """Removes the specified keys. A key is ignored if it does not exist."""
        del      ( key: String! ): Int!
        """Set a timeout on key. After the timeout has expired, the key will automatically be deleted. A key with an associated timeout is often said to be volatile in Redis terminology."""
        expire   ( key: String!, seconds: Int! ): Int!
        """Increments the number stored at key by one. If the key does not exist, it is set to 0 before performing the operation. An error is returned if the key contains a value of the wrong type or contains a string that can not be represented as integer. This operation is limited to 64 bit signed integers."""
        incr     ( key: String! ): Int!
        """Increments the number stored at key by increment. If the key does not exist, it is set to 0 before performing the operation. An error is returned if the key contains a value of the wrong type or contains a string that can not be represented as integer. This operation is limited to 64 bit signed integers."""
        incrby   ( key: String!, increment: Int! ): Int!
        """This command works exactly like EXPIRE but the time to live of the key is specified in milliseconds instead of seconds."""
        pexpire  ( key: String!, milliseconds: Int! ): Int!
        """Remove the existing timeout on key, turning the key from volatile (a key with an expire set) to persistent (a key that will never expire as no timeout is associated)."""
        persist  ( key: String! ): Int!
        """Renames key to newkey. It returns an error when key does not exist. If newkey already exists it is overwritten, when this happens RENAME executes an implicit DEL operation, so if the deleted key contains a very big value it may cause high latency even if RENAME itself is usually a constant-time operation."""
        rename   ( key: String!, newkey: String! ): Boolean!
        """Renames key to newkey if newkey does not yet exist. It returns an error when key does not exist."""
        renamenx ( key: String!, newkey: String! ): Int!
        """Set key to hold the string value. If key already holds a value, it is overwritten, regardless of its type. Any previous time to live associated with the key is discarded on successful SET operation."""
        set      ( key: String!, value: String! ): Boolean!
        """Set key to hold the string value and set key to timeout after a given number of seconds."""
        setex    ( key: String!, seconds: Int!, value: String! ): String!
        """Set key to hold string value if key does not exist. In that case, it is equal to SET. When key already holds a value, no operation is performed. SETNX is short for "SET if Not eXists"."""
        setnx    ( key: String!, value: String! ): Boolean!
        """Overwrites part of the string stored at key, starting at the specified offset, for the entire length of value. If the offset is larger than the current length of the string at key, the string is padded with zero-bytes to make offset fit. Non-existing keys are considered as empty strings, so this command will make sure it holds a string large enough to be able to set value at offset."""
        setrange ( key: String!, offset: Int!, value: String! ): Int!
    }
`