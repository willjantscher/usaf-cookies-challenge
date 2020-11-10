//npm init
//npm install
//npm install cookie-parser
//npm install express

//to run
    //nodemon app.js

//setup
//--------------------------------------------------------------------------------------------
const express = require('express')
var cookieParser = require('cookie-parser')

const app = express()
const port = 3009

app.use(cookieParser())
//--------------------------------------------------------------------------------------------



app.get('/login', (req, res) => {
        //set parameters for the cookies
        var opts = {
            maxAge: 900000,
            httpOnly: true
        };
        res.cookie('firstName','General', opts);
        res.cookie('lastName','Kenobi', opts);
        res.end();
})

app.get('/hello', (req, res) => {
    console.log('cookies: ', req.cookies)
    res.send('Hello there! ... ' + req.cookies.firstName + ' ' + req.cookies.lastName)
})



app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))