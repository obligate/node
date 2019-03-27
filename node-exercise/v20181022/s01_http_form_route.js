const http = require('http');
const ejs = require('ejs');
const url = require('url');
const fs = require('fs');

http.createServer(function(req,res){
    res.writeHead(200,{"content-type":"text/html;charset='utf-8'"});
    // res.end(JSON.stringify(url.parse(req.url,true)));
    let method = req.method.toLowerCase();
    let pathname = url.parse(req.url,true).pathname;
    if(pathname === "/login"){
        ejs.renderFile("views/form.ejs",{title:"登录"},function(err, data){
            res.end(data);
        })
    }else if(pathname === "/dologin" && method === "get"){
        console.log(url.parse(req.url,true));
        res.end("dologin get"+ JSON.stringify(url.parse(req.url,true)));
    }else if(pathname === "/dologin" && method === "post"){
        let postBody = "";
        req.on("data",function(chunk){
            postBody += chunk;
        });
        req.on("end",function(err,chunk){
            console.log(postBody);
            //res.end(postBody);
            // 写入到文件中
            fs.writeFile("login.txt",postBody+"\n",function(err){
                if(err){
                    console.log(err);
                    return;
                }else{
                    console.log("写入数据成功！");
                }
            });
            res.end("<script>alert('写入数据成功！');history.back();</script>");
        });
    }
    else{
        ejs.renderFile("views/index.ejs",{title:"首页",msg:"Hello 世界"},function(err,data){
            res.end(data);
        })
    }
}).listen(8001,function(){
    console.log("http://localhost:8001");
});

