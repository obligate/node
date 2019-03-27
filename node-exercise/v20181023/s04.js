const express = require('express');
const app = express();

app.get("/",function(req,res){
    res.send("首页");
});
app.get("/login",function(req,res){
    res.send("登录");
});

app.listen(8001,function(){
    console.log("http://localhost:8001");
});