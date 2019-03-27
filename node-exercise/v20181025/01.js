const http = require('http');
const url = require('url');
const ejs = require('ejs');

http.createServer(function(req,res){
    let method = req.method.toLowerCase();
    let urlObj = url.parse(req.url,true);
    let pathname = urlObj.pathname;
    res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
    if(pathname === "/" || pathname === "/index" || pathname === "/home"){
        ejs.renderFile("./views/index.ejs",{title:"首页"},function(err,data){
           res.end(data);
        });
    }else if(pathname ==="/login"){
        ejs.renderFile("./views/login.ejs",{title:"登陆页",msg:"请登录"},function(err,data){
            res.end(data);
        });
    }else if(pathname ==="/dologin" && method === "post"){
        let postStr = "";
        req.on("data",function(chunk){
            postStr += chunk;
        });
        req.on("end",function(err,chunk){
            res.end(postStr);
        });
    }else{
        res.end("没有合适的路由");
    }
}).listen(8001,function(){
    console.log("http://localhost:8001");
});