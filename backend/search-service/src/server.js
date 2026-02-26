const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
// require("./events/reviewSubscriber");
require("dotenv").config();

const searchRoutes = require("./routes/search.routes");
const errorMiddleware = require("./middlewares/error.middleware");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/search", searchRoutes);

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`Search Service running on port ${process.env.PORT}`);
});