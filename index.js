
const express = require("express");
const app = express();
const PORT = 3001;

const path = require("path");
const pathToFile = path.resolve("./data.json")

console.log(pathToFile);

app.get("/", (req, res) => {
  res.send("Hello World");
})

app.get("/resources", (req, res) => {
  res.send("Hello resources");
})

app.listen(PORT, () => {
  console.log("Server is listening on port: " + PORT);
})