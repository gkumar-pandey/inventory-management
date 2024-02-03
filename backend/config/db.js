const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const DB_USER = process.env.DB_USER;
    const DB_PASSWORD = process.env.DB_PASSWORD;

    const DB_CONNECTION_URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.kn21ygw.mongodb.net/?retryWrites=true&w=majority`;
    const connect = await mongoose.connect(DB_CONNECTION_URL);
    console.log("Database connected successfully.");
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = connectDb;
