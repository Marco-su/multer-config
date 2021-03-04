//------------------------IMPORTS--------------------------
const Image = require("../models/image.model");

//---------------------INITIALIZATION----------------------
const ctrl = {};

//--------------------CREATE NEW IMAGE----------------------
ctrl.createImage = async (req, res) => {
  const newImage = new Image({
    title: req.body.title,
    storage_name: `${req.file.filename}`,
  });
  await newImage.save();
  res.send("Imagen guardada");
};

//---------------------GET ALL IMAGES-----------------------
ctrl.getAllImages = async (req, res) => {
  const images = await Image.find().sort({ createdAt: -1 });
  res.json(images);
};

//--------------------GET SINGLE IMAGE----------------------
ctrl.getSingleImage = async (req, res) => {
  const image = await Image.findById(req.params.id);
  res.send(image);
};

//-------------------------EXPORT---------------------------
module.exports = ctrl;
