const Koa = require('koa');
const router = require('koa-router')();
const app = new Koa();

router.get("/",async (ctx) => {
    ctx.body = "首页";
});
// 匹配到news路由以后继续向下匹配news路由
router.get('/news',async (ctx,next)=>{
    console.log('这是一个新闻1');
    await next();
});
router.get('/news',async (ctx)=>{
    ctx.body='这是一个新闻';
});
router.get('/login', async (ctx)=>{
    ctx.body = "登录页";
});

// 启动路由
app.use(router.routes());
app.use(router.allowedMethods());
// 监听端口
app.listen(8001,function(){
    console.log("http://localhost:8001");
});
