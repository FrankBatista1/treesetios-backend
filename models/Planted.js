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
    trim: true,
  },
  lat:{
    type: Number,
    required: [true, "Latitude required"],
  },
  lng:{
    type: Number,
    required: [true, "Longitude required"],
  },
  description: {
    type: String,
    required: [true, "Please add a description"],
  },
});

module.exports = model("Planted", PlantedSchema);
