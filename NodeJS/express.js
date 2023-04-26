const express = require("express");

const app = express();

app.get('/', (req, res) => {
  res.write("hello Geeks" , {'Content-type ' : 'text/html'});
  res.end();
});

app.listen(9000);