var express = require('express');
var app = express();

/*配置ejs模板引擎*/
app.set('view engine', 'ejs');


// 默认会在这个views文件里面找模板
// 也可以设置模板的位置
// app.set('views', __dirname + '/views');

// 中间件 app.use
//express.static('public')给  public目录下面的文件提供静态web服务
// http://localhost:3001/images/baidu.png
app.use(express.static('public'));

//配置虚拟目录 的静态web服务
// 访问地址： http://localhost:3001/static/images/baidu.png
// 拿到 images/baidu.png去public目录找这个文件，如果有就返回
app.use('/static', express.static('public'));


app.get('/', function (req, res) {
    //res.send('ejs的演示');
    res.render('index');
    /*ejs渲染模板*/
})

app.get('/news', function (req, res) {
    //res.send('ejs的演示');
    var arr = ['1111', '222', '3333'];
    res.render('news', {
        /*数据*/
        list: arr
    });
    /*ejs渲染模板*/
})


/* 端口大于3000   */
app.listen(3001, '127.0.0.1', function () {
    console.log("http://127.0.0.1:3001");
});








