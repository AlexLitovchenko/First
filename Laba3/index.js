const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static(__dirname + '/source'));
app.get("/", (req, res) => {
  res.sendFile("source/first.html", {
    root: __dirname
  });
});

app.listen(PORT, () => {
  console.log("Server is started")
});