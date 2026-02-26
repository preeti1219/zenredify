const categoryService = require("../services/category.service");

exports.getCategories = async (req, res) => {
  try {
    const categories = await categoryService.groupBooks();

    res.status(200).json({
      success: true,
      data: categories
    });
  } catch (error) {
    console.error("Category Service Error:", error.message);
    res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });
  }
};