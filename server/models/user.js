const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

// create a schema
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

// userSchema.method.generateAuthToken = async function () {
//   // const token = jwt.sign({ _id: this._id }, process.env.TESTKEY || "1234567", {
//   //   expiresIn: "7d",
//   // });
//   return  "token";
// };

// create a model for user schema
const User = mongoose.model("user", userSchema);

// validating a data using joi
const validate = (data) => {
  const schema = joi.object({
    firstName: joi.string().required().label("FirstName"),
    lastName: joi.string().required().label("LastName"),
    email: joi.string().email().required().label("Email"),
    password: passwordComplexity().required().label("Password"),
  });
  return schema.validate(data);
};

module.exports = { User, validate };
