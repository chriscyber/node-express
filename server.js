const express = require('express'); //looks in node_modules auto

const hostname = 'localhost';
const port = 3000;

const app = express(); //returns express server application

app.use((req, res) => { // use method can take a callback function = a middleware function (req, res, next). next is a function.
  console.log(req.headers);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})