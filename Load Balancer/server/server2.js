const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Response from Server 2 (Port 5002)");
});

app.listen(5002, () => {
  console.log("Server 2 running on port 5002");
});