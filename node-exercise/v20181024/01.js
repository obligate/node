const http = require('http');
const url = require('url');
const ejs = require('ejs');
const path = require('path');

http.createServer(function(req,res){
    const method = req.method.toLowerCase();
    const urlObj = url.parse(req.url,true);
    const pathname = urlObj.pathname;

    res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
    if(pathname==="/" || pathname==="/home"|| pathname === "/index"){
        ejs.renderFile(path.join(__dirname,'views','index.ejs'),{title:"首页",msg:"你好，世界!"},function(err,data){
            res.end(data);
        })
    }else if(pathname==="/login"){
        ejs.renderFile(path.join(__dirname,'views','login.ejs'),{title:"登录页"},function(err,data){
            res.end(data);
        })
    }else if(pathname==="/dologin" && method==="post"){
        let poststr = "";
        req.on("data",function(chunk){
           poststr += chunk;
        });
        req.on("end",function(err,data){
            res.end(poststr);
        })
    }else{
        res.end("no route" + pathname);
    }
}).listen(8001,function(){
   console.log("http://localhost:8001");
});