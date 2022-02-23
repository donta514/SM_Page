const express = require('express')
const path = require('path')
const cors = require('cors')


const app = express()
const PORT = 3001

app.use(cors())
app.use(express.static("../client"))
app.use(express.json())


app.get('/', (req, res) => {
    res.send("I'm working")
})

app.get('/api/socialstats', (req, res) => {
    const stats = require('./socialStats.json')
    res.status(200).json(stats)
    // res.send("I'm working")
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})