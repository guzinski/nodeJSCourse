const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

const app = express();

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/nodeapi", { useNewUrlParser: true, useUnifiedTopology: true });

requireDir("./src/models");

app.use("/api", require("./src/routes"))
app.listen(3000);