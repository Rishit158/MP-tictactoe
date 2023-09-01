// importing modules
const express = require("express");
const http = require("http");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 3000;
var server = http.createServer(app);

var io = require("socket.io")(server);

// middleware
app.use(express.json());

const DB =
  "mongodb+srv://rishitraj:test123@cluster0.nbbfk0j.mongodb.net/?retryWrites=true&w=majority";

// syntax for setting up socket.io
io.onconnection("connection", (socket) => {
  console.log("connected!");
});

mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection Successful!");
  })
  .catch((e) => {
    console.log(e);
  });

server.listen(port, "0.0.0.0", () => {
  console.log(`Server started and running on port ${port}`);
});
