const axiosInstance = require("../config/axios.config");

class SearchService {

  async fetchAllBooks() {
    const response = await axiosInstance.get("/api/books");
    return response.data.data;
  }

  filterBooks(books, query, genre) {
    let filtered = books;

    if (query) {
      const q = query.toLowerCase();
      filtered = filtered.filter(book =>
        book.title.toLowerCase().includes(q) ||
        book.author.toLowerCase().includes(q)
      );
    }

    if (genre) {
      filtered = filtered.filter(book =>
        book.genre.toLowerCase() === genre.toLowerCase()
      );
    }

    return filtered;
  }
}

module.exports = new SearchService();