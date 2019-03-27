/*
 Koa 中 koa-bodyparser 中间件获取表单提交的数据

    1.npm install --save koa-bodyparser

    2.引入var bodyParser = require('koa-bodyparser');

    3.app.use(bodyParser());

    4.ctx.request.body;  获取表单提交的数据
* */
const Koa=require('koa');
const router = require('koa-router')();
const views = require('koa-views');
const bodyParser = require('koa-bodyparser');

const app=new Koa();
/*应用ejs模板引擎*/
app.use(views('views',{
    extension:'ejs'
}));

//配置post bodyparser的中间件
app.use(bodyParser());

router.get('/',async (ctx)=>{
    await  ctx.render('index');
});

//接收post提交的数据
router.post('/doAdd',async (ctx)=>{
    console.log(ctx.request.body);
    ctx.body = ctx.request.body;   //获取表单提交的数据
});

app.use(router.routes());   /*启动路由*/
app.use(router.allowedMethods());
app.listen(8001,function(){
    console.log("http://localhost:8001");
});






