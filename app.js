const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// environment variables
require("dotenv").config();

// db connection
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("DB connected...✔️"))
  .catch(() => console.log("Could not connect to DB ❌"));

// general middlwares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// routes
app.use("/api/plant", require("./routes/PlantedRoute.js"));

// listen to port
app.listen(process.env.PORT, () => {
  console.log("Server up and running ⚡");
});
