const koa = require('koa');
const app = new koa();

// 配置路由
// 中间件
// express 写法
// app.use(function(req,res){
//     res.send("返回数据");
// });

app.use(async (ctx)=>{
    ctx.body = "你好，koa2.x";
});

app.listen(8001,function(){
    console.log("http://localhost:8001")
});