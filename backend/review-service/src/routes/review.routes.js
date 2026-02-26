const express = require("express");
const router = express.Router();
const controller = require("../controllers/review.controller");

router.post("/:bookId", controller.addReview);
router.get("/:bookId", controller.getReviews);

module.exports = router;