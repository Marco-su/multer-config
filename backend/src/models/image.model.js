const { Schema, model } = require("mongoose");

const ImageSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    storage_name: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = model("Image", ImageSchema);
