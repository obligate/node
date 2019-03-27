const http = require('http');
const url = require('url');
const ejs = require('ejs');
const fs = require('fs');
http.createServer(function(req,res){
    const method = req.method.toLowerCase();
    const urlObj = url.parse(req.url,true);
    const pathname = urlObj.pathname;
    res.writeHead(200,{"content-type":"text/html;charset='utf-8'"});
    if(pathname === "/"){
        res.end("index");
    }else if(pathname==="/login"){
        ejs.renderFile("./views/form.ejs",{title:"登录"},function(err,data){
            res.end(data);
        });
    }else if(pathname==="/dologin" && method==="post"){
        let postbody = "";
        req.on("data",function(chunk){
            postbody+=chunk;
        });
        req.on("end",function(err,chunk){
            fs.writeFile("login.txt",postbody,'utf-8',function(err){
                if(err){
                    console.log(err);
                }else{
                    console.log("写入成功");
                }
            });
           res.end(postbody);
        });
    }
}).listen(8001,function(){
    console.log("http://localhost:8001");
});