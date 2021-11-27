const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const path = require("path");

app.use(express.static("build"));

app.get("*", function(req, res) {
  res.sendFile(path.resolve(__dirname, "build/index.html"));
});

app.listen(PORT, function() {
  console.log("App listening on PORT:", PORT);
});
