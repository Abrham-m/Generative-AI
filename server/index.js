const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./DB");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const cookieParser = require("cookie-parser");

// Database Connection
connection();

// middlewares
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(cookieParser());

// routes
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);

app.get("/", (req, res) => {
  res.cookie("sweet", "I am sweet cookie").send("home route reached");
});

app.get("/get", (req, res) => {
  res.send(`cookie : ${JSON.stringify(req.cookies["sweet"])}`);
});

const port = process.env.PORT || 4040;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
