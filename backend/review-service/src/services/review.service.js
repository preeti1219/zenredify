const Review = require("../models/review.model");

class ReviewService {

  async addReview(bookId, data) {
    const review = await Review.create({
      bookId,
      reviewText: data.reviewText,
      rating: data.rating
    });

    return review;
  }

  async getReviewsByBookId(bookId) {
    const reviews = await Review.find({ bookId })
      .sort({ createdAt: -1 });

    return reviews;
  }
}

module.exports = new ReviewService();