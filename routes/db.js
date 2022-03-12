const router = require("express").Router()
const fs = require('fs');
var notesDb = require('./db/db.json');

router.get('/notes', (req, res) => {

    fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err
        console.log(JSON.parse(data))
        res.json(JSON.parse(data))
    })

})


router.post('/notes', (req, res) => {
    fs.writeFile('./db/db.json', (err, data) => {
        if (err) throw err
        console.log(JSON.stringify(notesDb))
        res.json(notesDb)
    })
})

module.exports = router