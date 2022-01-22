//handle REST API endpoints for campsites and campsiteId

const express = require('express');
const campsiteRouter = express.Router(); //create router that can use express methods

//setup default routing methods
campsiteRouter.route('/') //root path consolidated in server.js
.all((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next(); //passes control to next routing method
})
.get((req, res) => {
  res.end('Will send all the campsites to you');
})
.post((req, res) => {
  res.end(`Will add the campsite: ${req.body.name} with description: ${req.body.description}`);
})
.put((req,res) => {
  res.statusCode = 403;
  res.end('PUT operation not supported on /campsites');
})
.delete((req, res) => {
  res.end('Deleting all campsites');
});





module.exports = campsiteRouter;