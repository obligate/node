/**
 * Created by Administrator on 2018/3/20 0020.
 */
var router = require('koa-router')();


router.get('/',async (ctx)=>{

    //ctx.body="前台首页";

    ctx.render('default/index');

})
router.get('/news',async (ctx)=>{

    ctx.render('default/news');

})

router.get('/service',async (ctx)=>{

    ctx.render('default/service');

})

router.get('/about',async (ctx)=>{

    ctx.render('default/about');

})

router.get('/case',async (ctx)=>{

    ctx.render('default/case');

})

router.get('/connect',async (ctx)=>{

    ctx.render('default/connect');
})

module.exports=router.routes();