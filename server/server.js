const express = require("express");
const cors = require("cors");
const db = require("./models");
const app = express();

require("dotenv").config({ path: "./.env" });

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.send("<h1>hello world</h1>");
});



//routes
const user = require("./router/user");
const churchmass = require("./router/churchmass")

app.use("/user", user);
app.use("/mass", churchmass)

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});