const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const router = express.Router();

// BOOK SERVICE
router.use(
  "/books",
  createProxyMiddleware({
    target: process.env.BOOK_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: {
      "^/books": "/api/books"
    },
    onProxyReq: (proxyReq, req) => {
      console.log("Forwarding to Book Service:", req.method, req.originalUrl);
    }
  })
);

// SEARCH SERVICE
router.use(
  "/search",
  createProxyMiddleware({
    target: process.env.SEARCH_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: {
      "^/search": "/api/search"
    }
  })
);

// REVIEW SERVICE
router.use(
  "/reviews",
  createProxyMiddleware({
    target: process.env.REVIEW_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: {
      "^/reviews": "/api/reviews"
    }
  })
);

// CATEGORY SERVICE
router.use(
  "/categories",
  createProxyMiddleware({
    target: process.env.CATEGORY_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: {
      "^/categories": "/api/categories"
    }
  })
);

module.exports = router;