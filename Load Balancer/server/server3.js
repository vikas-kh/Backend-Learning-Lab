    const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Response from Server 3 (Port 5003)");
});

app.listen(5003, () => {
  console.log("Server 3 running on port 5003");
});