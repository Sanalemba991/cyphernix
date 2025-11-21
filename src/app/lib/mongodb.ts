import mongoose from 'mongoose';

type CachedType = { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null; };

declare global {
  // eslint-disable-next-line no-var
  var _mongoose_cache: CachedType | undefined;
}

const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) throw new Error('MONGODB_URI environment variable is not set.');

const cached: CachedType = global._mongoose_cache ?? { conn: null, promise: null };
global._mongoose_cache = cached;

const opts = {
  serverSelectionTimeoutMS: 30000,
  socketTimeoutMS: 45000,
  family: 4,
  bufferCommands: false, // fail fast if disconnected
} as mongoose.ConnectOptions;

export async function connectDB(uri = MONGODB_URI, maxRetries = 3, retryDelay = 2000) {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    let attempt = 0;
    const connectWithRetry = async (): Promise<typeof mongoose> => {
      attempt++;
      try {
        await mongoose.connect(uri as string, opts);
        return mongoose;
      } catch (err) {
        if (attempt < maxRetries) {
          console.warn(`MongoDB connect attempt ${attempt} failed. Retrying in ${retryDelay}ms...`, err);
          await new Promise((r) => setTimeout(r, retryDelay));
          return connectWithRetry();
        }
        throw err;
      }
    };

    cached.promise = connectWithRetry();
    try {
      cached.conn = await cached.promise;
    } catch (e) {
      cached.promise = null;
      throw e;
    }
  }

  return cached.conn;
}
