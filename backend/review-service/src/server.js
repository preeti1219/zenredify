const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();

const connectDB = require("./config/db.config");
const reviewRoutes = require("./routes/review.routes");
const errorMiddleware = require("./middlewares/error.middleware");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/reviews", reviewRoutes);

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`Review Service running on port ${process.env.PORT}`);
});