const express = require("express");
const http = require("http");
const { getCar, postCar } = require("./car");
const { HOST, PORT } = require("./config");
require("./database");

const app = express();

app.set("HOST", HOST);
app.set("PORT", PORT);

// app.use(express.static(__dirname, "public"));

app.get("/car", getCar);
app.post("/car", postCar);

http.createServer(app).listen(app.get("PORT"), app.get("HOST"), () => {
  console.log(`Server running on http://${app.get("HOST")}:${app.get("PORT")}`);
});
