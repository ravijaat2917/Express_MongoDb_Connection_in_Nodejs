//init code
const mongoose = require('mongoose');
require('dotenv');
var assert = require('assert'); //nodejs inbuilt module - The assert module provides a way of testing expressions. If the expression evaluates to 0, or false, an assertion failure is being caused, and the program is terminated.

const db_url = process.env.DB_URL;
mongoose.set('strictQuery',true);

//connection Code to DataBase
mongoose.connect(
    db_url , 
    {
        useNewUrlParser:true ,
        useUnifiedTopology:true ,
        useCreateIndex:true 
    } , 
    function(error , link){
    //assert.equal(error , null , "DB connection fail"); //If some error then it terminate the further Process and shows the error message

    //if no error 
    console.log('Db connect successfully...');
    console.log(link);
})
