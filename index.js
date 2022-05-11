const express = require('express')
const app = express()

app.set('view engine', 'ejs')

console.log('greetings earthlings\nwe running shit...\n')

app.get('/', (req, res) => {
    console.log('here')
    res.status(500)
    res.send('hi')
})


app.listen(3000)
console.log('listening on port 3000')