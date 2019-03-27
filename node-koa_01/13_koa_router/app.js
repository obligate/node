const Koa=require('koa'),
    router=require('koa-router')(),
    template = require('koa-art-template'),
    path=require('path');

//引入子模块
const admin=require('./routes/admin.js');
const api=require('./routes/api.js');
const index=require('./routes/index.js');

const app=new Koa();

//配置koa-art-template 模板引擎
template(app, {
    root: path.join(__dirname, 'views'),
    extname: '.html',
    debug: process.env.NODE_ENV !== 'production'
});

//配置路由
router.use(index);
/*
  /admin   配置子路由  层级路由
 /admin/user
 */
router.use('/admin',admin.routes());
/*
 /api/newslist   新闻列表的api
 */
router.use('/api',api);   /*在模块里面暴露路由并且启动路由*/

//启动路由
app.use(router.routes()).use(router.allowedMethods());
app.listen(8001,function(){
    console.log("http://localhost:8001");
});









