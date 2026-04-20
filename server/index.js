import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/users', userRoutes);

const MONGO_URI = process.env.MONGO_URI;

// Connect to MongoDB with error handling
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB Connected Successfully via Mongoose');
  })
  .catch((err) => {
    console.error('❌ MongoDB Connection Error Details:');
    console.error(err.message);
    // This will tell us if it's still an SSL error or a password error
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));