var express=require('express'); /*引入*/
var app=new express();  /*实例化*/


app.get('/',function(req,res){
    res.send('你好express');
})

app.get('/news',function(req,res){
    res.send('你好express news');
})

/*匹配所有的路由  404*/
app.use(function(req,res){
    res.status(404).send('这是404 表示路由没有匹配到')
})

app.listen(3000,'127.0.0.1',function(){
    console.log("http://127.0.0.1:3000");
});

