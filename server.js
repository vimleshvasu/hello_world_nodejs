const express = require("express");
const app = express();
const db = require("./db");
require("dotenv").config();

const bodyParser = require("body-parser");
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;



app.get("/", (req, res) => {
  res.send("hello sir jee");
});

// import personRoutes
const personRoutes = require("./routes/personRoutes");
// use the routers
app.use("/person", personRoutes);

// import menuItemRoutes
const menuItemRoutes = require("./routes/menuItemRoutes");
// use the routers
app.use("/menu", menuItemRoutes);


app.listen(PORT, () => {
  console.log(`port listenning on 3000`);
});
