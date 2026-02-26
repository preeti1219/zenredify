const reviewService = require("../services/review.service");

exports.addReview = async (req, res, next) => {
  try {
    const { bookId } = req.params;

    const review = await reviewService.addReview(bookId, req.body);
    //  // Publish Event
    //  await publisher.publish(
    //     "REVIEW_ADDED",
    //     JSON.stringify(review)
    //   );
  
    //   console.log("REVIEW_ADDED event published");

    res.status(201).json({
      success: true,
      data: review
    });

  } catch (error) {
    next(error);
  }
};

exports.getReviews = async (req, res, next) => {
  try {
    const { bookId } = req.params;

    const reviews = await reviewService.getReviewsByBookId(bookId);

    res.status(200).json({
      success: true,
      count: reviews.length,
      data: reviews
    });

  } catch (error) {
    next(error);
  }
};