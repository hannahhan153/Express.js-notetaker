const router = require("express").Router()
const fs = require('fs');
var notesDb = require('../db/db.json');

router.get('/notes', (req, res) => {

    fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err
        // console.log(JSON.parse(data))
        res.json(JSON.parse(data))
    })

})


router.post('/notes', (req, res) => {
    console.table(notesDb)
    notesDb.push(req.body)
    console.table(notesDb)
    fs.writeFile('./db/db.json', JSON.stringify(notesDb),(err) => {
        if (err) throw err
        res.sendStatus(200)
    })
})

module.exports = router

// [
//     {
//         "title":"Test Title",
//         "text":"Test text"
//     }
// ]