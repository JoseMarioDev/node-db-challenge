const express = require('express');

const db = require('./data/db-config.js');
const projectsRouter = require('./data/projects-router');

const server = express();

server.use(helmet());
server.use(express.json());
server.use('/api/projects', projectsRouter);

module.exports = server;
