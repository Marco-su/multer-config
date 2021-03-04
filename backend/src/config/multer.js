const multer = require("multer");
const path = require("path");
const randomName = require("../helpers/randomName");

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, path.join(__dirname, "../public/upload"));
  },
  filename: (req, file, cb) => {
    const imgName = randomName();
    const ext = path.extname(file.originalname).toLowerCase();
    cb(null, `${imgName}-${Date.now()}${ext}`);
  },
});

const uploader = multer({ storage });

module.exports = uploader;
