"use strict";

const notes = require('express').Router();
const { readFromFile, readAndAppend, writeToFile } = require('../utilities/readWriteUtils');
const cryptoId = require('../utilities/cryptoId');


notes.get('/', (req, res) => {
  console.info(`${req.method} for API --> notes`);

  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});


notes.post('/', (req, res) => {
  console.info(`${req.method} for API --> notes`);

  const { title, text } = req.body;

  if (title && text ) {

    const newNote = {
      title,
      text,
      id: cryptoId()
    };

    readAndAppend(newNote, './db/db.json');

    const response = {
      status: 'success',
      body: newNote,
    };
    res.json(response);
  
  } else {
    res.json('Error posting note');
  }
});

notes.delete('/:id', (req, res) => {
    console.log(`${req.method} for API --> notes: ${req.params.id}`);

    readFromFile('./db/db.json').then((data) => {
        const notes = JSON.parse(data);

        var index = notes.map((note) => {return note.id}).indexOf(req.params.id);
        
        if( index === -1){
            res.status(404).json("Id not found");
        } else {
            notes.splice(index, 1);
            writeToFile('./db/db.json', notes);

            const response = {
              status: 'success',
              body: `Deleted id: ${req.params.id}`,
            };
            res.json(response);
        }

    });
});

module.exports = notes;
