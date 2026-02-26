const searchService = require("../services/search.service");

exports.searchBooks = async (req, res, next) => {
  try {
    const { q, genre } = req.query;

    const books = await searchService.fetchAllBooks();
    const filteredBooks = searchService.filterBooks(books, q, genre);

    res.status(200).json({
      success: true,
      count: filteredBooks.length,
      data: filteredBooks
    });

  } catch (error) {
    next(error);
  }
};