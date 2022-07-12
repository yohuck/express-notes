const { randomUUID } = require('crypto');
const { Router} = require('express')
const fs = require('fs')
const util = require('util');
const { readFromFile, readAndAppend, readAndDelete} = require('../helpers/fsUtils')

router = Router()


router.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
})

router.post('/', (req, res) => {
    console.info(`${req.method} recieved to add a note`)

    if (req.body){
        const newNote = {
            title: req.body.title,
            text: req.body.text,
            id: randomUUID()
        }

    readAndAppend(newNote, './db/db.json');

    res.json('Note added!')
} else {
    res.error('Error adding note :(')
    console.log('sad day')
}
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    console.log(id);
    readAndDelete(id, './db/db.json')
    res.json('deleted!')
})

module.exports = router