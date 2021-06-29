import mongoose from 'mongoose';

const conntetDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URL, {
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`DB Error:${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default conntetDB;
