const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    author: {
      type: String,
      required: true,
      trim: true
    },
    genre: {
      type: String,
      required: true
    },
    category: {
      type: String,
      enum: ["Best Seller", "New Arrival", "Editor's Pick"],
      required: true
    },
    description: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    },
    isBestSeller: { type: Boolean, default: false },
    isNewArrival: { type: Boolean, default: false },
    isEditorsPick: { type: Boolean, default: false }
  
  },
  { timestamps: true }
);

// Text index for future search optimization
BookSchema.index({ title: "text", author: "text" });

module.exports = mongoose.model("Book", BookSchema);