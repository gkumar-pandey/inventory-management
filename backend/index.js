const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");

const connectDb = require("./config/db");
const routes = require("./routes");
const {
  globalErrorHandler,
  routeNotFoundErrorHandler,
} = require("./middleware");

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());

const PORT = process.env.PORT || 5000;

connectDb();

app.use("/", routes);

// Route not found
app.use(routeNotFoundErrorHandler);

// Global error
app.use(globalErrorHandler);

app.listen(PORT, () => {
  console.log(`Server is running at PORT:${PORT}`);
});
