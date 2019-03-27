/*
* 图片上传模块的使用
1.安装
    cnpm instlal koa-multer --save


2、引入

 const multer = require('koa-multer');


3.配置上传的目录以后文件名称
     const multer = require('koa-multer');
     var storage = multer.diskStorage({
         destination: function (req, file, cb) {


         cb(null, 'public/upload');
        },
        filename: function (req, file, cb) {
            var fileFormat = (file.originalname).split(".");
            cb(null,Date.now() + "." + fileFormat[fileFormat.length - 1]);
        }
    })
    var upload = multer({ storage: storage });

4、接收数据

    注意 ：post

    注意：form表单必须加上 enctype="multipart/form-data"

    注意：上传的图片目录要存在

     router.post('/doAdd', upload.single('pic'),async (ctx)=>{

         ctx.body = {
             filename: ctx.req.file.filename,  //返回文件名
             body:ctx.req.body
         }

     })

* */


var router = require('koa-router')();

var DB=require('../../model/db.js');
var tools=require('../../model/tools.js');

//图片上传模块

const multer = require('koa-multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {


        cb(null, 'public/upload');   /*配置图片上传的目录     注意：图片上传的目录必须存在*/
    },
    filename: function (req, file, cb) {   /*图片上传完成重命名*/
        var fileFormat = (file.originalname).split(".");   /*获取后缀名  分割数组*/
        cb(null,Date.now() + "." + fileFormat[fileFormat.length - 1]);
    }
})
var upload = multer({ storage: storage });





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

    await  ctx.render('admin/article/add');

})

router.get('/ueditor',async (ctx)=>{

    await  ctx.render('admin/article/ueditor');

})
//post接收数据
router.post('/doAdd', upload.single('pic'),async (ctx)=>{

    ctx.body = {
        filename:  ctx.req.file?ctx.req.file.filename:'',  //返回文件名
        body:ctx.req.body
    }

})




module.exports=router.routes();