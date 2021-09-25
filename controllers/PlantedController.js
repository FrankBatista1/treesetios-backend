const Planted = require("../models/Planted");

const getAllPlantations = async (req, res) => {
  const plantations = await Planted.find();
  try {
    return res.status(200).json(plantations);
  } catch (error) {
    return res.status(500).json({ message: "Server Error" });
  }
};

const getPlantationById = async (req, res) => {
  const { id } = req.params;
  const plantation = await Planted.findById(id);
  try {
    return res.status(200).json(plantation);
  } catch (error) {
    return res.status(400).json({ message: "User not found" });
  }
};

const createPlantation = async (req, res) => {
  const plantation = await Planted.create(req.body);
  try {
    return res.status(201).json(plantation);
  } catch (error) {
    return res.status(500).json({ message: "Couldn't create the plantation" });
  }
};

const updatePlantation = async (req, res) => {
  const { id } = req.params;
  const plantation = await Planted.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  try {
    return res.status(202).json(plantation);
  } catch (error) {
    return res.status(500).json({ message: "Couldn't update the plantation" });
  }
};

const deletePlantation = async (req, res) => {
  const { id } = req.params;
  await Planted.findByIdAndDelete(id);
  try {
    return res
      .status(203)
      .json({ message: "Successfully Deleted The plantation" });
  } catch (error) {
    return res.status(500).json({ message: "Couldn't delete the plantation" });
  }
};

module.exports = {
  getAllPlantations,
  getPlantationById,
  createPlantation,
  updatePlantation,
  deletePlantation,
};
