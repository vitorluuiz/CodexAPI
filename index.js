require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const connectDB = require('./config/database')
connectDB();

app.use(express.json())

const lobbyRouter = require('./routes/lobby')

app.use('/api/lobby', lobbyRouter)

app.get('/hello', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port} \n CNAME: http://localhost:${port}`)
})