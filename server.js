"use strict";

const express = require('express');
const path = require('path');
const apiRouter = require('./src/routes/apiRouter.js');

var PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

// APIs router
app.use('/api', apiRouter);

// Homepage
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));

// Notes page
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '/public/notes.html')));

// Redirect all to home page
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
