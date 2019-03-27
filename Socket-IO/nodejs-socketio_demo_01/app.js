const http=require('http');
const fs=require('fs');  /*fs内置的模块*/
const app=http.createServer(function(req,res){
    //加载静态页面
    fs.readFile('app.html',function(err,data){
        res.writeHead(200,{"Content-Type":"text/html;charset='utf-8'"});
        res.end(data);
    })
});

//引入socket.io
const io = require('socket.io')(app);
io.on('connection', function (socket) {
    console.log('服务器建立连接了');
});

app.listen(3000);

/*使用socket.io
1.安装
 npm install socket.io
 2、引入建立连接
 const io = require('socket.io')(app);
 io.on('connection', function (socket) {
    console.log('服务器建立连接了');
 });
3、在客户端 jshtml里面引入
 http://localhost:3000/socket.io/socket.io.js
* */