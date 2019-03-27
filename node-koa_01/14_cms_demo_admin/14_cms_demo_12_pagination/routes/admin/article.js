
var router = require('koa-router')();

var DB=require('../../model/db.js');
var tools=require('../../model/tools.js');

router.get('/',async (ctx)=>{


    var page=ctx.query.page ||1;

    var pageSize=5;

    //查询总数量

    var count= await  DB.count('article',{});
    var result=await DB.find('article',{},{},{
        page:page,
        pageSize:pageSize
    });
    await  ctx.render('admin/article/index',{
        list: result,
        page:page,
        totalPages:Math.ceil(count/pageSize)
    });
})




router.get('/add',async (ctx)=>{


    //获取一级分类

    var result=await DB.find('article',{'pid':'0'});


    await  ctx.render('admin/article/add',{

        catelist:result
    });

})



module.exports=router.routes();