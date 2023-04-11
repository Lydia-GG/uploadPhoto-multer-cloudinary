import mongoose from 'mongoose';

mongoose.set('strictQuery', true);
const connectDB = () => {
  mongoose.connect(process.env.MONGODB_URL);
  console.log('database connected...');
};

export default connectDB;
