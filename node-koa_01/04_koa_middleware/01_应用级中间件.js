const Koa = require('koa');
const router = require('koa-router')();
const app = new Koa();

//匹配任何路由  ，如果不写next，这个路由被匹配到了就不会继续向下匹配,不是我们想要的
//  app.use(async (ctx)=>{
//     ctx.body='这是一个中间件';
//  });

/*匹配路由之前打印日期*/
app.use(async (ctx,next)=>{
    console.log(new Date());
    await next();  /*当前路由匹配完成以后继续向下匹配*/
});

router.get("/",async (ctx) => {
    ctx.body = "首页";
});
router.get("/news",async (ctx)=>{
    ctx.body = "新闻页";
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
