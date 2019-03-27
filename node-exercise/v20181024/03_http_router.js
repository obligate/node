const http = require('http');
const path = require('path');
const http_router = require('./model/http_router');
const app = http_router();
const ejs = require('ejs');
const server = http.createServer(app);
app.get("/",function(req,res){
    res.end("index");
});
app.get("/home",function(req,res){
    res.send("index");
});
app.get("/index",function(req,res){
    res.send("index");
});
app.get("/login",function(req,res){
    ejs.renderFile(path.join(__dirname,'views','login.ejs'),{title:"登录页"},function(err,data){
        res.end(data);
    })
});
app.post('/dologin',function(req,res){
    res.send(req.query);
});
server.listen(8001,function(){
    console.log("http://localhost:8001");
});