const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const db = require("./config/db");
const restaurentRoute = require("./routes/restaurentRoute");
const userRoute = require("./routes/userRoute");
const categoryRoute = require("./routes/categoryRoutes");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// config the routes
app.use("/api/v1", restaurentRoute);
app.use("/api/v1", userRoute);
app.use("/api/v1", categoryRoute);
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port: ${process.env.PORT}`);
});
