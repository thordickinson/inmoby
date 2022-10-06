
const mongoose = require("mongoose");
const { url } = require("envalid");
const { validateEnv } = require("./util");



async function getEnv() {
    const env = await validateEnv({
        MONGODB_URI: url({
            desc: "Mongo connection url",
            example: "mongodb://user:password@192.168.0.1:12345/database",
            default: "mongodb://cotizador:cotizador@localhost:27017/cotizador"
        }),
    });
    return env
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global["mongoose"];

if (!cached) {
    cached = global["mongoose"] = { conn: null, promise: null };
}

async function dbConnect() {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            bufferCommands: false,
        };
        const env = await getEnv()

        cached.promise = mongoose
            .connect(env.MONGODB_URI, opts)
            .then((mongoose) => {
                return mongoose;
            });
    }
    cached.conn = await cached.promise;
    return cached.conn;
}

module.exports = dbConnect