const http = require('http');
const url = require('url');
const app = require('./model/model');
http.createServer(function(req,res){
    const method = req.method.toLowerCase();
    const urlObj = url.parse(req.url,true);
    let pathname = urlObj.pathname.replace("/","");
    try{
        app[pathname](req,res);
    }catch (err) {
        app["home"](req,res);
    }

}).listen(8001,function(){
   console.log("http://localhost:8001");
});