require("dotenv").config();
const colors = require("colors");
const { errorHandler } = require("./middleware/errorMiddleware");
const express = require("express");
const app = express();

const connectDB = require("./config/db");

connectDB();

//route
const route = require("./routes/goalRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/goals", route);

//error handler
app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}...`);
});
