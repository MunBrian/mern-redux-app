require("dotenv").config();
require("colors");
const { errorHandler } = require("./middleware/errorMiddleware");
const express = require("express");
const app = express();

const connectDB = require("./config/db");

connectDB();

//route
const goalRoute = require("./routes/goalRoutes");
const userRoute = require("./routes/userRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/goals", goalRoute);
app.use("/api/v1/users", userRoute);

//error handler
app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}...`);
});
