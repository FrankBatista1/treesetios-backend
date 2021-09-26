const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// environment variables
require("dotenv").config();

// db connection
mongoose
  .connect('mongodb://localhost:27017/treesitos')
  .then(() => console.log("DB connected...✔️"))
  .catch(() => console.log("Could not connect to DB ❌"));

// general middlwares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// routes
app.use("/api/plants", require("./routes/PlantedRoute.js"));

// listen to port
app.listen(5000, () => {
  console.log("Server up and running ⚡");
});
