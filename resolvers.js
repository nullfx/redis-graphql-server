export default {
    Query: {
        get: ( _, { key }, { client } ) => {
            try {
                return client.getAsync(key)
            } catch(e) {
                console.log(`get: ${e}`)
                return null
            }
        },
        keys: ( _, { pattern }, { client } ) => {
            try {
                return client.keysAsync(pattern)
            } catch(e) {
                console.log(`keys: ${e}`)
                return null
            }
        },
        ttl: async ( _, { key }, { client } ) => {
            try {
                return await client.ttl(key)
            } catch(e) {
                console.log(`get: ${e}`)
                return null
            }
        },
        pttl: ( _, { key }, { client } ) => {
            try {
                return client.pttl(key)
            } catch(e) {
                console.log(`get: ${e}`)
                return null
            }
        }
    },
    Mutation: {
        set: async ( _, {key, value}, { client } ) => {
            try {
                await client.set(key, value)
                return true
            } catch(e) {
                console.log(`set: ${e}`)
                return false
            }
        },
        del: async ( _, { key }, { client } ) => {
            try {
                await client.del(key)
                return true
            } catch(e) {
                console.log(`del: ${e}`)
                return false
            }
        },
        incr: async ( _, { key }, { client } ) => {
            try {
                await client.incr(key)
                return true
            } catch(e) {
                console.log(`incr: ${e}`)
                return false
            }
        },
        decr: async ( _, { key }, { client } ) => {
            try {
                await client.decr(key)
                return true
            } catch(e) {
                console.log(`decr: ${e}`)
                return false
            }
        },
        expire: async ( _, { key, seconds }, { client } ) => {
            try {
                await client.expire(key, seconds)
                return true
            } catch(e) {
                console.log(`expire: ${e}`)
                return false
            }
        },
        rename: async ( _, { key, newkey }, { client } ) => {
            try {
                await client.rename(key, newkey)
                return true
            } catch(e) {
                console.log(`rename: ${e}`)
                return false
            }
        }
    }
}