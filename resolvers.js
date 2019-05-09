export default {
    Query: {
        get: ( _, { key }, { client } ) => {
            try {
                return client.getAsync(key)
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
        inc: async ( _, { key }, { client } ) => {
            try {
                await client.incr(key)
                return true
            } catch(e) {
                console.log(`inc: ${e}`)
                return false
            }
        },
        dec: async ( _, { key }, { client } ) => {
            try {
                await client.decr(key)
                return true
            } catch(e) {
                console.log(`dec: ${e}`)
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