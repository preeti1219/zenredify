
const axiosInstance = require("../config/axios");


class CategoryService {
  async fetchAllBooks() {
    const response = await axiosInstance.get("/api/books");

    // Extract actual array from Book Service
    return response.data.data;
  }

  async groupBooks() {
    const books = await this.fetchAllBooks();

    const bestSeller = books.filter(book => book.isBestSeller);
    const newArrival = books.filter(book => book.isNewArrival);
    const editorsPick = books.filter(book => book.isEditorsPick);

    return {
      bestSeller,
      newArrival,
      editorsPick
    };
  }
}

module.exports = new CategoryService();