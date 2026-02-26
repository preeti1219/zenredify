const axios = require("axios");

const axiosInstance = axios.create({
  baseURL: process.env.BOOK_SERVICE_URL || "http://localhost:4001",
  timeout: 5000
});

module.exports = axiosInstance;