/**
 *  应用程序的启动（入口）文件
 * */


var express  = require("express");
var app = express();

var mongoose = require("mongoose");

var swig = require("swig");
// 配置应用模板
// 第一个参数，模板引擎的名称，同时也是模板文件的后缀
// 第二个参数表示用于解析处理模板内容的方法
app.engine("html",swig.renderFile);
// 设置模板文件存放的目录，第一个参数必须是views，第二参数是目录
app.set("views","./views");
// 注册所使用的模板引擎，第一个参数必须是 view engine
// 第二个参数和app.engine这个方法中定义的模板引擎的名称（第一个参数）是一致的
app.set("view engine","html");
// 在开发过程中，需要取消模板缓存
swig.setDefaults({cache:false});


// 设置静态文件托管
// 当用户访问的url 以/public开始，那么直接返回对应 __dirname+"/public" 下的文件
app.use('/public',express.static(__dirname+"/public"));

// app.get("/main.css", function(req,res,next){
//     res.setHeader("content-type","text/css");
//     res.send("body {background:red;}");
// });

//route
// app.get("/",function(req,res){
//     // res.send("这是第一个node web项目");
//     // 读取views 目录下的指定文件，解析并返回给客户端
//     // 第一个参数：表示模板的文件，相对于views目录，views/index.html
//     // 第二个参数：传递给模板使用的数据
//     res.render("index");
// });

/**
 *  根据不同的功能划分模块
 * */
app.use("/admin",require("./routers/admin"));
app.use("/api",require("./routers/api"));
app.use("/",require("./routers/main"));



mongoose.connect("mongodb://localhost:27017/blog",{useNewUrlParser: true},function(err){
    if(err){
        console.log("数据库链接失败");
    }else{
        console.log("数据库链接成功");
    }
});
app.listen(8081,function(){
    console.log("http://localhost:8081");
})