/**
 * Created by Administrator on 2018/3/20 0020.
 */
var router = require('koa-router')();

var DB=require('../model/db.js');

router.get('/',async (ctx)=>{
    ctx.body="api接口";
})


router.get('/catelist',async (ctx)=>{

    var result=await DB.find('articlecate',{})

    //console.log(result);
    ctx.body={
        result:result
    };
})


router.get('/newslist',async (ctx)=>{

    var page=ctx.query.page || 1;

    var pageSize=5

    var result=await DB.find('article',{},{'_id':1,"title":1},{
        page,
        pageSize
    })

    //console.log(result);
    ctx.body={
        result:result
    };
})


/**
 * 原始的解析jsonp的思路
 */
router.get("/jsonp",async (ctx)=>{
    // 获取jsonp的callback
    let callbackName = ctx.query.callback || 'callback';
    let returnData = {
        success: true,
        data: {
            text: 'this is a jsonp api',
            time: new Date().getTime(),
        }
    };
    // jsonp的script字符串
    let jsonpStr = `;${callbackName}(${JSON.stringify(returnData)})`;

    // 用text/javascript，让请求支持跨域获取
    ctx.type = 'text/javascript';

    // 输出jsonp字符串
    ctx.body = jsonpStr

});



module.exports=router.routes();