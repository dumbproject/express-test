const express = require('express')
const app = express()
const PORT = 3000 || process.env.PORT


app.set('view engine', 'ejs')

console.log('greetings earthlings\nwe runnin shit...\n')

app.get('/', (req, res) => {
    console.log('here')
    res.render("index.ejs")
    // res.status(500)
    // res.send('hi')
})


// app.listen(3000)
app.listen(PORT)
console.log(`listening on port ${PORT}`)