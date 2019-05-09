export default {
    Query: {
        get: (parent, {key}, {client}) => {
            try {
                return client.getAsync(key)
            } catch(e) {
                console.log(`get: ${e}`)
                return null
            }
        }
    },
    Mutation: {
        set: async (parent, {key, value}, { client } ) => {
            try {
                await client.set(key, value)
                return true
            } catch(e) {
                console.log(`set: ${e}`)
                return false
            }
        }
    }
}