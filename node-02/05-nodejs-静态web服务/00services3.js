//引入模
var http = require('http'); //http模块
var fs = require('fs'); //fs模块
var path = require('path');  //path模块
var url = require('url'); //url模块
// 引入自定义模块
var mimeModel = require('./model/getmime.js');
//console.log(mimeModel.getMime('.css'));   //获取文件类型

http.createServer(function (req, res) {
    // 1.
    //http://localhost:8001/news.html    /news.html
    //http://localhost:8001/index.html    /index.html
    // 2.
    //css/dmb.bottom.css
    // 3.
    //xxx.json?214214124

    var pathname = url.parse(req.url).pathname;
    if (pathname === '/') {
        pathname = '/index.html';   //默认加载的首页
    }

    var extname = path.extname(pathname);  //获取文件的后缀名

    if (pathname != '/favicon.ico') {  // 过滤请求favicon.ico
        fs.readFile('static/' + pathname, function (err, data) {
            if (err) {
                console.log('404');
                fs.readFile('static/404.html', function (error, data404) {
                    if (error) {
                        console.log(error);
                    }
                    res.writeHead(404, {"Content-Type": "text/html;charset='utf-8'"});
                    res.write(data404);
                    res.end(); // 结束响应

                })
            } else { /*返回这个文件*/
                var mime = mimeModel.getMime(extname); //获取文件类型
                res.writeHead(200, {"Content-Type": "" + mime + ";charset='utf-8'"});
                res.write(data);
                res.end(); //结束响应
            }
        })
    }
}).listen(8001, function () {
    console.log("http://localhost:8001");
});




