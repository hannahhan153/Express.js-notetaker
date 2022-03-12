const express = require('express');
const dbRoutes = require('./routes/db');
const html = require('./routes/html');

const app = express()
const PORT = process.env.PORT || 8080;

app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(express.static("public"))

app.use("/api", dbRoutes)
app.use("/", html)


app.listen(PORT, (err) => {
    if(err) throw err
    console.log("got connected at port " + PORT)
})