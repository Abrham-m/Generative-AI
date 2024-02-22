const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./DB");

// Database Connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 4040;

app.get("/", (req, res) => {
  res.send("home route reached");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
