const { Router} = require('express')
const fs = require('fs')
const util = require('util')

router = Router()

const readFromFile = util.promisify(fs.readFile);
/**
 *  Function to write data to the JSON file given a destination and some content
 *  @param {string} destination The file you want to write to.
 *  @param {object} content The content you want to write to the file.
 *  @returns {void} Nothing
 */

router.get('/', (req, res) => {
    readFromFile('../../../db/db.json').then((data) => res.json(JSON.parse(data)))
})

module.exports = router