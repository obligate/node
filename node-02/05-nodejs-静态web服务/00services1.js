// 引入模块
var http = require('http');   //http模块
var fs = require('fs');      //fs模块

// 创建 http 服务
http.createServer(function (req, res) {
    var pathname = req.url;
    if (pathname === '/') {
        pathname = '/index.html';  // 默认加载的首页
    }
    if (pathname !== '/favicon.ico') {  // 过滤请求favicon.ico
        console.log(pathname);
        //文件操作获取 static下面的index.html
        fs.readFile('static/' + pathname, function (err, data) {
            if (err) {  /*么有这个文件*/
                console.log('404');
            } else { /*返回这个文件*/
                res.writeHead(200, {"Content-Type": "text/html;charset='utf-8'"});
                res.write(data);
                res.end();
                /*结束响应*/
            }
        })
    }
}).listen(8001,function(){
    console.log("http://localhost:8001");
});
/*
* 存在的问题，不能根据扩展名返回对应的header，例如css，js ，
* res.writeHead(200, {"Content-Type": "text/html;charset='utf-8'"});
*
* */