const port = 3003;

const bodyParser = require('bosy-parser');
const express = require('express');
const server = express();

server.use( bodyParser.urlencoded({ extended :true  }) );
server.use( bodyParser.json() ) ;
