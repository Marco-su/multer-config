//---IMPORTS
const router = require("express").Router();

const uploader = require("../config/multer");

const {
  createImage,
  getAllImages,
  getSingleImage,
} = require("../controllers/images.controller");

//---ROUTES
router.get("/", getAllImages);
router.post("/", uploader.single("image"), createImage);
router.get("/:id", getSingleImage);

//---EXPORT
module.exports = router;
