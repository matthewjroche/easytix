// lib/dbConnect.js
import mongoose from 'mongoose';

const dbConnect = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  const dbUri = process.env.MONGO_URI;
  if (!dbUri) {
    throw new Error('The MONGO_URI environment variable is not set.');
  }

  return mongoose.connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

export default dbConnect;
