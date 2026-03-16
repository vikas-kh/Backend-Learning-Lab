const express = require("express");


const app = express();
  
let count = 0;

app.get("/", (req, res) => {
  count++;
  res.json({
    server: "SERVER 3",
    requestsHandled: count
  });
});

app.listen(5003, () => {
  console.log("Server 3 running on 5003");
});