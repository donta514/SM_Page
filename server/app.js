const express = require('express')
const path = require('path')


const app = express()
const PORT = 5000


app.use(express.static("../client"))
app.use(express.json())


app.get('/', (req, res) => {
    res.send("I'm working")
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})