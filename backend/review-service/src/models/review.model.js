const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema(
  {
    bookId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Book"
    },
    reviewText: {
      type: String,
      required: true,
      trim: true
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5
    }
  },
  { timestamps: true }
);

// Index for faster lookup by bookId
ReviewSchema.index({ bookId: 1 });

module.exports = mongoose.model("Review", ReviewSchema);