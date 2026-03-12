const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Response from Server 4 (Port 5004)");
});

app.listen(5004, () => {
  console.log("Server 4 running on port 5004");
});