/**
 * Created by Administrator on 2018/3/20 0020.
 */
var router = require('koa-router')();
const DB = require('../../model/db.js');

router.get('/',async (ctx)=>{
    ctx.render('admin/index');
})


router.get('/changeStatus',async (ctx)=>{

    //console.log(ctx.query);

    var collectionName=ctx.query.collectionName; /*数据库表*/
    var attr=ctx.query.attr; /*属性*/
    var id=ctx.query.id;   /*更新的 id*/

    var data= await DB.find(collectionName,{"_id":DB.getObjectId(id)});


    if(data.length>0){
        if(data[0][attr]==1){
            var json = { /*es6 属性名表达式*/
                [attr]: 0
            };
        }else{
            var json = {
                [attr]: 1
            };
        }

        let updateResult=await DB.update(collectionName,{"_id":DB.getObjectId(id)},json);

        if(updateResult){
            ctx.body={"message":'更新成功',"success":true};
        }else{
            ctx.body={"message":"更新失败","success":false}
        }

    }else{
        ctx.body={"message":'更新失败,参数错误',"success":false};
    }

})

module.exports=router.routes();