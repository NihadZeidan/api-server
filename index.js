'use strict';


require('dotenv').config();

const server = require('./src/server.js');

const PROT = process.env.PORT

server.start(PROT);