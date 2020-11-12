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

const bodyParser = require("body-parser")
const app = express()
const port = 3009

app.use(bodyParser.json())
app.use(cookieParser())
//--------------------------------------------------------------------------------------------


// create a route to /login with their name and set a cookie

app.post('/login', (req, res) => {
    //send over user data in body of request
    let user = req.body;
    let result;
    if(user.name) {
        result = {
            "status": "Success",
            "message": "You're logged in"
        }
    }
    else {
    result = {
        "status": "Failure",
        "message": "You have not logged in"
        }
    res.status(404).send(result)    //sets status and logs result
    }
    res.cookie('name', user.name);
    res.json(result);
})
// POST http://localhost:3009/login
// {
//     "name": "william"
// }

app.get('/hello', (req, res) => {
    let name = req.cookies.name
    if(name) {
        res.send(`Welcome, ${name}!`)
    }
    else {
        res.send('Not logged in')
    }
})
// GET http://localhost:3009/hello





//hard coded setting of cookies
// app.get('/login', (req, res) => {
//         //set parameters for the cookies
//         var opts = {
//             maxAge: 900000,
//             httpOnly: true
//         };
//         res.cookie('firstName','General', opts);
//         res.cookie('lastName','Kenobi', opts);
//         res.end();
// })
// app.get('/hello', (req, res) => {
//     console.log('cookies: ', req.cookies)
//     res.send('Hello there! ... ' + req.cookies.firstName + ' ' + req.cookies.lastName)
// })



app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))