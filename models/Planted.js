const { Schema, model } = require("mongoose");

const PlantedSchema = Schema({
  planterName: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
  },
  location: {
    type: String,
    required: [true, "Location required"],
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please add a description"],
  },
});

module.exports = model("Planted", PlantedSchema);
