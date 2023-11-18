const mongoose = require("mongoose");

const DBConnect = async () => {
  try {
    const connect = await mongoose.connect(process.env.DB_STRING);
    console.log("DB Connected : ", connect.connection.name);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = DBConnect;
