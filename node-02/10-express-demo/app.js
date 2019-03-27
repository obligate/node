/*
* 1. npm i express -S
* 2. var express = require('express');
*    var app = new express();
*    app.get('', function(req,res){
*    });
* */


var express = require('express');
var app = new express();


app.get('/', function(req,res){
    res.send("你好，express");
});

app.get('/news',function(req,res){
    res.send("news模块");
});
app.get('/login',function(req,res){
    res.send("login模块");
});
app.get('/register',function(req,res){
    res.send("register模块");
});

app.listen(3000,'127.0.0.1',function(){
    console.log("http://127.0.0.1:3000");
});