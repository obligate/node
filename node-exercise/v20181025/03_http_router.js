const http = require('http');
const url = require('url');
const ejs = require('ejs');
const router = require('./model/http_route');
const app = router();

const server = http.createServer(app);
app.get("/",function(req,res){
    res.end("index");
});
app.get("/home",function(req,res){
    res.end("index");
});
app.get("/index",function(req,res){
    res.end("index");
});
app.get("/login",function(req,res){
    ejs.renderFile("./views/login.ejs",{title:"登陆页",msg:"请登录"},function(err,data){
        res.end(data);
    });
});
app.post("/dologin",function(req,res){
    res.end(req.query);
});

server.listen(8001,function(){
    console.log("http://localhost:8001");
});