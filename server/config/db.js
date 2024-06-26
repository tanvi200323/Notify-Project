const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const connectDB = async() => {
  try {
    // const conn = await mongoose.connect(process.env.MONGODB_URI);
    const mongoDBConnectionString = process.env.MONGODB_URI;

    console.log('MongoDB Connection String:', mongoDBConnectionString);

    const conn = await mongoose.connect(mongoDBConnectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Database Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
}
module.exports = connectDB;