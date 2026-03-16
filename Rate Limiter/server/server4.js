const express = require("express");


const app = express();


let count = 0;

app.get("/", (req, res) => {
  count++;
  res.json({
    server: "SERVER 4",
    requestsHandled: count
  });
});

app.listen(5004, () => {
  console.log("Server 4 running on 5004");
});