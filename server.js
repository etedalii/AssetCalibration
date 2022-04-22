const express = require("express");
const fileupload = require("express-fileupload");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./server/db");
const assetRouter = require("./server/routes/asset-router");

const app = express();
const apiPort = 3001;

// Accessing the path module
const path = require("path");

// Step 1:
app.use(express.static(path.resolve(__dirname, "./client/build")));
// Step 2:
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

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

app.use("/api", assetRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
