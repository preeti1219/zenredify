module.exports = (err, req, res, next) => {
    console.error("Gateway Error:", err.message);
  
    res.status(500).json({
      success: false,
      message: "Gateway Internal Server Error"
    });
  };