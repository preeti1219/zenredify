const Book = require("../models/book.model");

class BookService {

  async createBook(data) {
    return await Book.create(data);
  }

  async getAllBooks() {
    return await Book.find().sort({ createdAt: -1 });
  }

  async getBookById(id) {
    const book = await Book.findById(id);
    if (!book) {
      throw new Error("Book not found");
    }
    return book;
  }

  async updateBook(id, data) {
    const updated = await Book.findByIdAndUpdate(id, data, { new: true });
    if (!updated) {
      throw new Error("Book not found");
    }
    return updated;
  }

  async deleteBook(id) {
    const deleted = await Book.findByIdAndDelete(id);
    if (!deleted) {
      throw new Error("Book not found");
    }
    return { message: "Book deleted successfully" };
  }
}

module.exports = new BookService();