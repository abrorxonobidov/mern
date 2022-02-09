const express = require('express')
const cors = require('cors')

const connectDB = require('./config/db')

require('dotenv').config()


// Connect to data base
connectDB()

const app = express()

app.use(cors({
    origin: 'http://localhost:3000'
}))

//body parser
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/index', (req, res) => res.send('Hello world'))
app.use('/api/travel', require('./routes/tarvelRoutes'))

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server listening on port : ${PORT}`))

