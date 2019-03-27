const http = require('http');
const url = require('url');
const model = require('./model/model');

http.createServer(function(req,res){
    let method = req.method.toLowerCase();
    let pathname = url.parse(req.url,true).pathname;
    pathname = pathname.replace("/","");
    try{
        model[pathname](req,res);
    }catch(err){
        model.index(req,res);
    }
}).listen(8001,function(){
    console.log("http://localhost:8001");
});