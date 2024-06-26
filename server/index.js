const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const connection = require("./DB");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const chatRoute = require("./routes/chatMe");
const cookieParser = require("cookie-parser");

dotenv.config();

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
app.use("/api/chat", chatRoute);



app.get("/", (req, res) => {
res.json({variable: process.env.PORT})
});


const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
