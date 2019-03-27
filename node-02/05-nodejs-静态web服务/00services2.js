//引入模块
var http = require('http');   // http模块
var fs = require('fs');       //fs模块
var path = require('path');   //path模块
// 自定义模块
var mimeModel = require('./model/getmime.js');

//console.log(mime.getMime('.css'));   //获取文件类型
http.createServer(function (req, res) {
    var pathname = req.url;
    if (pathname == '/') {
        pathname = '/index.html'; //  默认加载的首页
    }
    var extname = path.extname(pathname); //获取文件的后缀名

    if (pathname != '/favicon.ico') {   // 过滤请求favicon.ico
        console.log(pathname);
        //文件操作获取 static下面的index.html

        fs.readFile('static/' + pathname, function (err, data) {

            if (err) {  /*么有这个文件*/
                console.log('404');
                fs.readFile('static/404.html', function (error, data404) {
                    if (error) {
                        console.log(error);
                        // 这边需要返回404 页面，不够完善，可以看一下00service2.js
                    }
                    res.writeHead(404, {"Content-Type": "text/html;charset='utf-8'"});
                    res.write(data404);
                    res.end();
                    /*结束响应*/
                })
            } else { /*返回这个文件*/
                var mime = mimeModel.getMime(extname);   // 获取文件类型
                res.writeHead(200, {"Content-Type": "" + mime + ";charset=utf-8"});
                res.write(data);
                res.end(); //结束响应
            }
        })
    }
}).listen(8001, function () {
    console.log("http://localhost:8001");
});

/*
*  存在的问题，   req.url 中包含参数的情况，会出现解析的问题，需要使用url 模块来处理，> 00service3.js
*
* */



