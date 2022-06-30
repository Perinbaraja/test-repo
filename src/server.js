const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const config = require("./config");
require("dotenv").config();

const create = async () => {
  const app = express();
  //DB connection
  mongoose
    .connect(config.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));

  app.use(cors());

  app.use(express.json({ limit: "50mb" }));
  app.use(
    express.urlencoded({
      limit: "50mb",
      extended: true,
      parameterLimit: 500000,
    })
  );

  app.get("/", (req, res) => res.send("Hello"));

  app.use("/api/user", require("./routes/userRoute"));

  return app;
};

module.exports = {
  create,
};
