const fs = require("fs");
const path = require("path");
const express = require("express");
const PORT = 3005;
const app = express();

app.use(express.json());

app.use(express.static("public"));
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});
app.get("/api/notes", (req, res) => {
  fs.readFile("./db/db.json", "utf8", (err, data) => {
    console.log(data);
    res.send(data);
  });
});

//get forward 

//get the api notes method Post
app.post('/api/notes', (req, res) => {
  var newNote = (req.body)
  fs.readFile("./db/db.json", "utf8", function (err, data) {
    //we need to add the new note to the array of notes represented by the words title. 
    fs.writeFile(
      "./db/db.json",
      JSON.stringify(notes),
      function (err) {
        if (err) return console.log("failed to saved", err);

        console.log("succesfully saved");
      }
    );
  })
});


// app.get("/api", function (req, res) {
// });

// app.post("/api", function (req, res) {
//   console.log(req.body);
//   res.send("got the post req");
// });

app.listen(PORT, function () {
  console.log("rLIstening on " + PORT);
});
