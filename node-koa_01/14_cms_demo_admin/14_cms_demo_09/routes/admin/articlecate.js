/**
 var obj=[
 {
     'title':'技术团队',
     'list':[
         {
             title: '移动开发',
         },
         {
             title: '网站开发',
         }
     ]
 },
 {
     'title':'数码分类',
     'list':[
         {
             title: '手机',
         },
         {
             title: '电脑',
         }
     ]
 }
 ]
 */
var router = require('koa-router')();

var DB=require('../../model/db.js');
var tools=require('../../model/tools.js');

router.get('/',async (ctx)=>{

    var result=await DB.find('articlecate',{});

    console.log(tools.cateToList(result));
    await  ctx.render('admin/articlecate/index',{
        list: tools.cateToList(result)
    });
});




router.get('/add',async (ctx)=>{

    await  ctx.render('admin/user/add');

})

router.get('/edit',async (ctx)=>{

    ctx.body="编辑用户";

})

router.get('/delete',async (ctx)=>{

    ctx.body="删除用户";

})

module.exports=router.routes();