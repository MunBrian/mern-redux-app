require("dotenv").config();
require("colors");
const path = require("path");
const { errorHandler } = require("./middleware/errorMiddleware");
const express = require("express");
const app = express();

//connect to db
const connectDB = require("./config/db");

//route
const goalRoute = require("./routes/goalRoutes");
const userRoute = require("./routes/userRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/goals", goalRoute);
app.use("/api/v1/users", userRoute);

//serve frontend
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "build", "index.html")
    )
  );
} else {
  app.get("/", (req, res) => res.send("Please set to production"));
}

//error handler
app.use(errorHandler);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(
        `MongoDb connected: Server is running on port ${port}...`.cyan.underline
      );
    });
  } catch (error) {
    console.log(error);
  }
};

start();
