const express = require("express");


const app = express();

  
let count = 0;

app.get("/", (req, res) => {
  count++;
  res.json({
    server: "SERVER 5",
    requestsHandled: count
  });
});

app.listen(5005, () => {
  console.log("Server 5 running on 5005");
});