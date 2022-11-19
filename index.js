const express = require('express');
const app = express();
const port = 3000;
const path = require("path");
const staticpath = path.join(__dirname, "/")

app.use(express.static(staticpath));

app.get('/', function (req, res) {
  res.sendFile(staticpath + '/index.html');
});

app.listen(port);