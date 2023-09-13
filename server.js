const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
var cors = require('cors');
// const mongoose = require('mongoose');
// const db = mongoose.connection
// mongoose.connect(process.env.DATABASE_URL);
// //handling the database Erroes
// db.on('error', (error) => console.log(error))
// db.once('open', () => console.log('connected to database'))

app.use(express.json())
app.use(cors())


//setting up ROUTES
const userResource = require('./Routes/person.js')
app.use('/person', userResource)


app.listen(3001, () => console.log('Im Listening'))