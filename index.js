const express = require("express");
app = express();

// cors
const cors = require("cors");

const corsOptions = {
  origin: "*",
  credentials: true,
  allowedHeaders: ["sessionId", "Content-Type"],
  exposedHeaders: ["sessionId"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
};
app.use(cors(corsOptions));

// dotenv
require("dotenv").config({ path: "./config/.env" });

// database coonect
require("./config/database").connectToMongoDB();

//json parser
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
const postRoutes = require("./routes/post.routes.js");
app.use("/", postRoutes);

// server
app.listen(process.env.PORT, () => {
  console.log("Server started on port " + process.env.PORT);
});
