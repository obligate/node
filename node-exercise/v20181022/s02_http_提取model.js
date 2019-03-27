const http = require('http');
const url = require('url');
const model = require('./model/http_model');
http.createServer(function(req,res){
    res.writeHead(200,{"content-type":"text/html;charset='utf-8'"});
    let pathname = url.parse(req.url,true).pathname.replace("/","");
    if(pathname!=='favicon.ico') {
        try {
            model[pathname](req, res);
        } catch (err) {
            model['home'](req, res);
        }
    }
}).listen(8001,function(){
   console.log("http://localhost:8001");
});