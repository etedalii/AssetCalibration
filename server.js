const express = require("express");
const fileupload = require("express-fileupload");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./server/db");
const assetRouter = require("./server/routes/asset-router");

const app = express();
var apiPort = normalizePort(process.env.PORT || '3001');

// Accessing the path module
const path = require("path");
console.log(path)
//app.use(express.static("./client/build"));
app.use(express.static(path.join(__dirname, "./public")));
app.use(express.static(path.join(__dirname, "./node_modules")));

app.use(cors());
app.use(fileupload());
app.use(express.static("files"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/api/upload", (req, res) => {
  const newpath = __dirname + "/files/";
  const file = req.files.file;
  const filename = file.name;
  file.mv(`${newpath}${filename}`, (err) => {
    if (err) {
      res.status(500).send({ message: "File upload failed", code: 200 });
    }
    res.status(200).send({ message: "File Uploaded", code: 200 });
  });
});

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("/", (req, res) => {
  res.send("Asset Calibration System");
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.use("/api", assetRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
