const express = require("express");
const bodyParser = require("body-parser");
const app = express();
require("dotenv").config();
const postRoute = require("./routes/posts");
const imageRoute = require("./routes/images");
const userRoute = require("./routes/user");
const commentRoute = require("./routes/comments");
require("./db/connection");

app.use(bodyParser.json());
app.use("/uploads", express.static("uploads"));
app.use("/posts", postRoute);
app.use("/user", userRoute);
app.use("/images", imageRoute);
app.use("/comments", commentRoute);

module.exports = app;
