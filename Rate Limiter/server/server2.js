const express = require("express");


const app = express();


let count = 0;

app.get("/", (req, res) => {
  count++;
  res.json({
    server: "SERVER 2",
    requestsHandled: count
  });
});

app.listen(5002, () => {
  console.log("Server 2 running on 5002");
});