const Koa=require('koa'),
    router = require('koa-router')(),
    path=require('path'),
    render = require('koa-art-template'),
    static = require('koa-static');
const app=new Koa();

//配置模板引擎
render(app, {
    root: path.join(__dirname, 'views'),
    extname: '.html',
    debug: process.env.NODE_ENV !== 'production'
});
//配置 静态资源的中间件
app.use(static(__dirname + '/public'));

//引入路由模块
const index=require('./routes/index.js');
const api=require('./routes/api.js');
const admin=require('./routes/admin.js');

router.use('/admin',admin);
router.use('/api',api);
router.use(index);

app.use(router.routes()).use(router.allowedMethods());  /*启动路由*/
app.listen(8001,function(){
    console.log("http://localhost:8001");
});







