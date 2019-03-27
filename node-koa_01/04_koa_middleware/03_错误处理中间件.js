const Koa = require('koa');
const router = require('koa-router')();
const app = new Koa();

app.use(async (ctx,next)=>{
    console.log('这是一个中间件01');
    next();
    if(ctx.status===404){   /*如果页面找不到*/
        ctx.status = 404;
        ctx.body="这是一个 404 页面"
    }else{
        console.log(ctx.url);
    }
});

router.get("/",async (ctx) => {
    ctx.body = "首页";
});

router.get('/news',async (ctx,next)=>{
    console.log('这是新闻2');
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
