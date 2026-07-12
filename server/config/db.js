const mongoose = require('mongoose');

const connectDB = async () => {
  if (!process.env.MONGODB_URI) {
    console.warn('⚠️ MONGODB_URI not set — skipping database connection');
    return;
  }

  try {
    console.log('🔗 Attempting to connect to MongoDB...');

    await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
    });

    console.log('✅ MongoDB Connected successfully');
    console.log('📦 Database:', mongoose.connection.name);
  } catch (error) {
    console.error('❌ MongoDB connection error:', error.message);

    if (process.env.NODE_ENV === 'production') {
      process.exit(1);
    }

    console.warn('⚠️ Server continuing without database in development mode');
  }
};

module.exports = connectDB;