const express = require("express");

// controller imports
const {
  getAllPlantations,
  getPlantationById,
  createPlantation,
  updatePlantation,
  deletePlantation,
} = require("../controllers/PlantedController");

const router = express.Router();

router.get("/", getAllPlantations);

router.get("/planted/:id", getPlantationById);

router.post("/planted", createPlantation);

router.put("/planted/:id", updatePlantation);

router.delete("/planted/:id", deletePlantation);

module.exports = router;
