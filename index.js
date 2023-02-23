const express = require("express");
const app = express();
const PORT = 7000;
const db = require("./config/db");
const restaurentRoute = require("./routes/restaurentRoute");

// config the routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
