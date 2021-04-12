const path = require("path");
const express = require("express");
const PORT = 3005;
const app = express();

app.use(express.json());

app.use(express.static("public"));
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});
app.get("/api", (req, res) => {
  res.send("api route");
});

const fs = require("fs");
fs.readFile("./db/db.json", "utf8", (err, data) => {
  console.log(data);
});

fs.writeFile(
  "./db/dbNew.json",
  JSON.stringify([{ key: "value" }]),
  function (err) {
    if (err) return console.log("failed to saved", err);

    console.log("succesfully saved");
  }
);

app.get("/api", function (req, res) {
fs.readFile("./db/db.json", "utf8", function (err, data) {
return res.send(data);
});
});

app.post("/api", function (req, res) {
  console.log(req.body);
  res.send("got the post req");
});

app.listen(PORT, function () {
  console.log("rLIstening on " + PORT);
});
