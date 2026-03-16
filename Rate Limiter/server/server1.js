const express = require("express");


const app = express();
 
let count = 0;

app.get("/", (req, res) => {
  count++;
  res.json({
    server: "SERVER 1",
    requestsHandled: count
  });
});

app.listen(5001, () => {
  console.log("Server 1 running on 5001");
});