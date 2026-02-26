module.exports = (err, req, res, next) => {
    console.error("Search Service Error:", err.message);
  
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: err.message
    });
  };