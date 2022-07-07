const express = require("express")
const app = express()
const mongooseConnect = require("./config/databaseConnect");
const errorHandlerMiddleWare = require("./middleware/errorHandler");
const routeNotFound = require("./middleware/routeNotFound");
require("dotenv").config({
  path: "./config/config.env",
});

// routes import
const toyRoutes = require("./routes/toyRoutes");
const userRoutes = require("./routes/userRoutes");

app.use(express.json());
app.use("/api/v1/toy", toyRoutes);
app.use("/api/v1/user", userRoutes);
app.use(routeNotFound);
app.use(errorHandlerMiddleWare);

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await mongooseConnect(process.env.MONGO_CLOUD_URI);
    app.listen(PORT, () => {
      console.log(`app is listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();