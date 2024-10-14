const express = require('express')
const bodyParser = require('body-parser')
const app=express();
app.use(bodyParser.json());
app.use(express.static(__dirname+'/Webpages'))

// access the data using request.body(). json request comes in . express is goinfg tpo psrse it
// since bodyparser module intercepts the funvtions before they reach our route functions, they re clled middlewares.
// middlewares intercept funtions
// dynamo db is serverless no sql cloud database fast 

app.get('/', (req, res)=> {
    res.send("Hello")
})
app.post('/hello', (req, res)=> {
    // req is valid json data
    let body = req.body;
    body.message = "Hello"+body.name;
    res.json(body);
})
app.listen(3000, ()=> {
    console.log("server listening on 3000")
})