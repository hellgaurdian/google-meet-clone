const express = require("express");

const app = express();

app.get("/", (req, res) => {
  // Serve your ad here
  res.send("Hello, world!");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
