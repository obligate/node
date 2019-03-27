const path = require('path');
const ejs = require('ejs');

const app={
    "home":function(req,res){
        res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
        ejs.renderFile(path.join(__dirname,"../",'views','index.ejs'),{title:"首页",msg:"你好，中国 in model"},function(err,data){ res.end(data);});
    },
    "index":function(req,res){
        res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
        ejs.renderFile(path.join(__dirname,"../",'views','index.ejs'),{title:"首页",msg:"你好，中国 in model"},function(err,data){ res.end(data);});
        },
    "login":function(req,res){
        res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
        ejs.renderFile(path.join(__dirname,"../",'views','login.ejs'),{title:"登录页"},function(err,data){
            res.end(data);
        })
    },
    "dologin":function(req,res){
        res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
        let poststr = "";
        req.on("data",function(chunk){
            poststr += chunk;
        });
        req.on("end",function(err,data){
            res.end(poststr);
        })
    },
};


module.exports = app;