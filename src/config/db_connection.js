const mongoose = require("mongoose")
const env = require("dotenv").config


const dbConnect = async () => {
  try {
    const connect = await mongoose.connect(process.env.DATABASE_URL);
    console.log("database connected successfully");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = dbConnect;
