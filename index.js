const express = require('express'); //Require memanggil/import library express
const app = express(); //membuat objek dari class express
const port = 3000; //membuat variabel port
const path = require("path");
const staticpath = path.join(__dirname, "/")

app.use(express.static(staticpath)); //menentukan dimana file server.js dijalankan, memudahkan melacak file HTML

app.get('/', function (req, res) { //fungsi untuk merespon request yang diterima
  res.sendFile(staticpath + '/index.html');
});

app.listen(port); //menjalankan server pada port yang telah ditentukan