const http = require('http');
const url = require('url');
const app = require("./model/model");
http.createServer(function(req,res){
    const urlObj = url.parse(req.url,true);
    const pathname = urlObj.pathname.replace("/","");
    res.writeHead(200,{"content-type":"text/html;charset='utf-8'"});
    try{
        app[pathname](req,res);
    }catch (err) {
        app['home'](req,res);
    }

}).listen(8001,function(){
    console.log("http://localhost:8001");
});