const express = require('express');
const app = express();
const user = require('./05');


app.get("/",function(req,res){
    res.send('index');
});

app.use('/user',user);
app.listen("8001",function(){
    console.log("http://localhost:8001");
});