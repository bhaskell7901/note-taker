"use strict";

const apiRouter = require('express').Router();
const notesRoute = require('./notes');

apiRouter.use('/notes', notesRoute);

module.exports = apiRouter;
