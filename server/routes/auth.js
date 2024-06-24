const router = require("express").Router();
const { User } = require("../models/user");
const bcrypt = require("bcrypt");
const joi = require("joi");
const jwt = require("jsonwebtoken");

const token = (payload) => {
  return jwt.sign(
    {
      data: payload,
    },
    process.env.JWTPRIVATEKEY || /*"1234567"*/,
    { expiresIn: "1h" }
  );
};

router.post("/login", async (req, res) => {
  try {
    // check validity of the email and password
    const { error } = validate(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });

    // check whether a user is existed or not
    const user = await User.findOne({ email: req.body.email });
    if (!user)
      return res.status(401).send({ message: "Invalid Email or Password" });

    // check whether the password match with the stored password in the DB
    const validPassword = bcrypt.compare(req.body.password, user.password);

    if (!validPassword)
      return res.status(401).send({ message: "Invalid Email or Password" });

    let accessToken = token(user._id);
    
    res.cookie("jwt", accessToken, {
      maxAge: 3600,
      httpOnly: true,
      path: "/",
    });
    res.status(200).send({ message: "Logged in successfully" + accessToken , firstName: user.firstName, lastName: user.lastName ,ok:true});
  } catch (error) {
    res.status(500).send({ message: `Internal server error ${error}` });
  }
});

const validate = (data) => {
  const schema = joi.object({
    email: joi.string().email().required().label("Email"),
    password: joi.string().required().label("Password"),
  });
  return schema.validate(data);
};

router.get("/check", (req, res) => {
  if (req.cookies["jwt"]) {
    let token = req.cookies.jwt;
    jwt.verify(token, "1234567", (err, user) => {
      if (err) {
        res.status(401).send("Not Authorized");
      }
      res.status(200).send(`Welcome Aboard dear user`);
    });
  } else {
    res.status(402).send("Please Login to access this");
  }
});

module.exports = router;
