const express = require("express");
const app = express();
const urlRoute = require("./routes/url");

const { connectMongoDb } = require("./connect");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/url", urlRoute);

connectMongoDb("mongodb://127.0.0.1:27017/short-url")
  .then(() => {
    console.log("MongoDb Connnected");
  })
  .catch(() => {
    console.log("Error occured in Connecting MongoDb");
  });

PORT = 8001;
app.listen(PORT, () => {
  console.log("Server Started at :", PORT);
});
