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
        getrange: ( _, { key, start, end }, { client } ) => {
            try {
                return client.getrangeAsync(key, start, end)
            } catch(e) {
                console.log(`getrange: ${e}`)
                return null
            }
        },
        keys: ( _, { pattern }, { client } ) => {
            try {
                return client.keysAsync(pattern)
            } catch(e) {
                console.log(`keys: ${e}`)
                return [String]
            }
        },
        mget: ( _, { key }, { client } ) => {
            try {
                return client.mgetAsync(keys)
            } catch(e) {
                console.log(`mget: ${e}`)
                return null
            }
        },
        pttl: ( _, { key }, { client } ) => {
            try {
                return client.pttlAsync(key)
            } catch(e) {
                console.log(`pttl: ${e}`)
                return -100
            }
        },
        strlen: ( _, { key }, { client } ) => {
            try {
                return client.strlenAsync(key)
            } catch(e) {
                console.log(`strlen: ${e}`)
                return -100
            }
        },
        ttl: ( _, { key }, { client } ) => {
            try {
                return client.ttlAsync(key)
            } catch(e) {
                console.log(`ttl: ${e}`)
                return -100
            }
        }
    },
    Mutation: {
        append: ( _, { key, value }, { client } ) => {
            try {
                return client.appendAsync(key, value)
            } catch(e) {
                console.log(`append: ${e}`)
                return -100
            }
        },
        decr: ( _, { key }, { client } ) => {
            try {
                return client.decrAsync(key)
            } catch(e) {
                console.log(`decr: ${e}`)
                return -100
            }
        },
        decrby: ( _, { key, decrement }, { client } ) => {
            try {
                return client.decrbyAsync(key, decrement)
            } catch(e) {
                console.log(`decrby: ${e}`)
                return -100
            }
        },
        del: ( _, { key }, { client } ) => {
            try {
                return client.delAsync(key)
            } catch(e) {
                console.log(`del: ${e}`)
                return -100
            }
        },
        expire: ( _, { key, seconds }, { client } ) => {
            try {
                return client.expireAsync(key, seconds)
            } catch(e) {
                console.log(`expire: ${e}`)
                return -100
            }
        },
        incr: ( _, { key }, { client } ) => {
            try {
                return client.incrAsync(key)
            } catch(e) {
                console.log(`incr: ${e}`)
                return -100
            }
        },
        incrby: ( _, { key, increment }, { client } ) => {
            try {
                return client.incrbyAsync(key, increment)
            } catch(e) {
                console.log(`incrby: ${e}`)
                return -100
            }
        },
        pexpire: ( _, { key, milliseconds }, { client } ) => {
            try {
                return client.pexpireAsync(key, milliseconds)
            } catch(e) {
                console.log(`pexpire: ${e}`)
                return -100
            }
        },
        persist: ( _, { key }, { client } ) => {
            try {
                return client.persistAsync(key)
            } catch(e) {
                console.log(`persist: ${e}`)
                return -100
            }
        },
        rename: ( _, { key, newkey }, { client } ) => {
            try {
                return client.renameAsync(key, newkey)
            } catch(e) {
                console.log(`rename: ${e}`)
                return `- ERR: ${e}`
            }
        },
        renamenx: ( _, { key, newkey }, { client } ) => {
            try {
                return client.renamenxAsync(key, newkey)
            } catch(e) {
                console.log(`renamenx: ${e}`)
                return -100
            }
        },
        set: async ( _, { key, value }, { client } ) => {
            try {
                await client.set(key, value)
                return true
            } catch(e) {
                console.log(`set: ${e}`)
                return false
            }
        },
        setex: ( _, { key, seconds, value }, { client } ) => {
            try {
                return client.setexAsync(key, seconds, value)
            } catch(e) {
                console.log(`setex: ${e}`)
                return `- ERR ${3}`
            }
        },
        setnx: ( _, { key, value }, { client } ) => {
            try {
                return client.setnxAsync(key, value)
            } catch(e) {
                console.log(`setnx: ${e}`)
                return false
            }
        },        
        setrange: ( _, { key, offset, value }, { client } ) => {
            try {
                return client.setrangeAsync(key, offset, value)
            } catch(e) {
                console.log(`setrange: ${e}`)
                return 0
            }
        }
    }
}