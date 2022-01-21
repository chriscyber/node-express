const express = require('express'); //looks in node_modules auto
const morgan = require('morgan'); //middleware

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));

//serve files from public folder
app.use(express.static(__dirname + '/public'));

app.use((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})