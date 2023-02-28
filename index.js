// init code
const express = require('express');
const morgan  = require('morgan');
const cors = require('cors');
require('dotenv').config();
const dataBase = require('./dataBase');

const app = express();
const PORT = process.env.PORT;
const URL = process.env.DB_URL;
// console.log(PORT , URL);

//Middleware setup
app.use(morgan('dev'));
app.use(cors());

//Default routes
app.all( '/' , (req , res)=>{
    return res.json({
        status:true,
        message:'Index Page Working...'
    })
})

//Start server
app.listen(PORT , ()=>{
    console.log(`Server listening on Port : ${PORT}`);
});