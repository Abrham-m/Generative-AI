const mongoose = require("mongoose");

module.exports = () => {
  try {
    // DB url must be from atlas that is from process.env...
    mongoose.connect("mongodb://127.0.0.1:27017/Auth", {}).then(() => {
      console.log("Database Connection Established...!");
    });
  } catch (error) {
    console.log("Error: Database connection can not be established...!", error);
  }
};
