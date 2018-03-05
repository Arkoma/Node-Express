const express = require('express');
const bodyParser = require('body-parser');

const server = express();
const PORT = 3030;
const STATUS_SUCCESS = 200;
const STATUS_USER_ERROR = 422;

server.use((req,res, next) => {
  console.log("here's the request: ", req);
  next();
});

server.use(bodyParser.json());

let idCounter = 0;
let users = {};

server.post('/', (req, res) => {
  const { body: { user } } = req;
  idCounter++;
  users[idCounter] = user;
  res.status(STATUS_SUCCESS);
  res.send({ id: idCounter, user });
});


server.listen(PORT, (err) => {
	if (err) {
    console.log(`There was an error starting the server: ${err}`);
  } else {
    console.log(`Server is listening on port ${PORT}`)
  }
});