const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Response from Server 5 (Port 5005)");
});

app.listen(5005, () => {
  console.log("Server 5 running on port 5005");
});