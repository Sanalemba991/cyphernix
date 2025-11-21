import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI || '<PASTE_YOUR_MONGODB_URI_HERE>';
const opts = { serverSelectionTimeoutMS: 10000, socketTimeoutMS: 45000, family: 4 };

async function main() {
  try {
    console.log('Trying to connect to MongoDB:', uri.startsWith('mongodb+srv') ? 'SRV URI' : 'URI');
    await mongoose.connect(uri, opts);
    console.log('Connected ok');
    await mongoose.connection.db.admin().ping();
    console.log('Ping OK');
  } catch (err) {
    console.error('Connection test failed:', err);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect().catch(()=>{});
  }
}

main();