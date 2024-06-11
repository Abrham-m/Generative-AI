const router = require("express").Router();
const { User, validate } = require("../models/user");
const bcrypt = require("bcrypt");

// Register route
router.post("/", async (req, res) => {
  try {
    // validation of the user information
    const { error } = validate(req.body);
    if (error) {
      return res.status(400).send({ message: `${error.details[0].message }`});
    }
    // check is the user already exists
    const user = await User.findOne({ email: req.body.email });

    if (user) res.status(409).send({message:"User with this email already exists"});
    else {
      // hash the plain text password
      const salt = await bcrypt.genSalt(Number(process.env.SALT));
      const hashedPassword = await bcrypt.hash(req.body.password, salt);

      // create a document in the DB
      const newUser = await new User({
        ...req.body,
        password: hashedPassword,
      }).save();

      // check if the document created
      if (newUser)
        res
          .status(201)
          .send({
            message:
              " Registration complete! Now login and explore all the exciting content on our website.",
          });
    }
  } catch (error) {
    res.status(500).send({message:error}); 
  }
});

module.exports = router;
