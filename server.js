const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

require("./Modals/UserModal");

mongoose
  .connect(
    "mongodb+srv://vishwavijay:6cOOjfp3JvEji2J6@cluster0.p3vfbqx.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB is  connected successfully"))
  .catch((err) => console.error(err));

app.get("/", (req, res) => {
  // Serve your ad here
  res.send("Hello, world!");
});

app.listen(6969, () => {
  console.log("started");
});

// 6cOOjfp3JvEji2J6
// vishwavijay
