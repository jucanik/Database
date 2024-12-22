const express = require('express')
const bodyParser = require('body-parser')
const app=express();
app.use(bodyParser.json());
app.use(express.static(__dirname+'/Webpages'))
const aws = require("aws-sdk")


// access the data using request.body(). json request comes in . express is goinfg tpo psrse it
// since bodyparser module intercepts the funvtions before they reach our route functions, they re clled middlewares.
// middlewares intercept funtions
// dynamo db is serverless no sql cloud database fast flexible cost effective fault tolerant highly scalable secure
// nosql new type ofdatabase that helps us to work with big data . high volume velocity variety. pay as you use
// ddb is collection of items .and items consistes of attributes nbasically a json store
// different attributres with few common attributes e.g partition key and sort key (sort key is optional)
// all dynamo db tables must have primarykey . ddb does not allow to query table without primary key or the table indexes
// indexes and view in sl is same as local and global secondary index in ddb
// ddb naming :tables are the top level entities . all tables consist of dtabases. same name ddb can exist in different regions
// no such foreign key concepts in ddb . though we can implement 1: 1/ 1:many relationships etc.this is benefit. no joins , efficient query
// no strict schema in ddb tablesprimary key and optionally any local index to specify ddb
// data types in ddb : scalar e.g string , boolean . 2. Settypes: multiple scalar values . 3. complex structures document types . list and map

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