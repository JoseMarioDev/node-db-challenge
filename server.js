const express = require('express');

const db = require('./data/db-config.js');
const projectsRouter = require('./data/projects/projects-router');
const resourcesRouter = require('./data/resources/resources-router');
const tasksRouter = require('./data/tasks/tasks-router');

const server = express();

server.use(express.json());
server.use('/api/projects', projectsRouter);
server.use('/api/resources', resourcesRouter);
server.use('/api/tasks', tasksRouter);

module.exports = server;
