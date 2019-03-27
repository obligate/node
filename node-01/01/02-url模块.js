
var http = require('http');
var url = require('url');
http.createServer(function(req, res){
    res.writeHead(200,{"Content-Type":"text/html;charset='utf-8'"});
    // res.write('你好 node.js');
    // res.end();
    res.end('您好 node.js');

}).listen(8001);