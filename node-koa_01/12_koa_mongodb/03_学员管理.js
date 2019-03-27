const Koa=require('koa'),
    router = require('koa-router')(),
    render = require('koa-art-template'),
    path=require('path'),
    bodyParser=require('koa-bodyparser'),
    static = require('koa-static'),
    DB=require('./module/db.js');

const app=new Koa();

//配置post提交数据的中间件
app.use(bodyParser());

// 静态资源托管
app.use(static(__dirname+'/static'));

//配置 koa-art-template模板引擎
render(app, {
    root: path.join(__dirname, 'views'),   // 视图的位置
    extname: '.html',  // 后缀名
    debug: process.env.NODE_ENV !== 'production'  //是否开启调试模式
});
//显示学员信息
router.get('/',async (ctx)=>{
    let result=await DB.find('user',{});
    console.log(result);
    await ctx.render('index',{
        list:result
    });
});
//增加学员
router.get('/add',async (ctx)=>{
    await ctx.render('add');
});

//执行增加学员的操作
router.post('/doAdd',async (ctx)=>{
    //获取表单提交的数据
    // console.log(ctx.request.body);  //{ username: '王麻子', age: '12', sex: '1' }
    let data=await DB.insert('user',ctx.request.body);
    //console.log(data);
    try{
        if(data.result.ok){
            ctx.redirect('/')
        }
    }catch(err) {
        console.log(err);
        // return;
        ctx.redirect('/add');
    }
});

//编辑学员
router.get('/edit',async (ctx)=>{
    //通过get传过来的id来获取用户信息
    let id=ctx.query.id;
    let data=await DB.find('user',{"_id":DB.getObjectId(id)});
    //获取用户信息
    await ctx.render('edit',{
        list:data[0]
    });
});

router.post('/doEdit',async (ctx)=>{
    //通过get传过来的id来获取用户信息
    //console.log(ctx.request.body);
    let id=ctx.request.body.id;
    let username=ctx.request.body.username;
    let age=ctx.request.body.age;
    let sex=ctx.request.body.sex;
    let data=await DB.update('user',{"_id":DB.getObjectId(id)},{
        username,age,sex
    });
    try{
        if(data.result.ok){
            ctx.redirect('/')
        }
    }catch(err){
        console.log(err);
        // return;
        ctx.redirect('/');
    }
});


//删除学员
router.get('/delete',async (ctx)=>{
    let id=ctx.query.id;
    let data=await DB.remove('user',{"_id":DB.getObjectId(id)});
    console.log(data);
    if(data){
        ctx.redirect('/')
    }
});

app.use(router.routes());   /*启动路由*/
app.use(router.allowedMethods());
app.listen(8001,function(){
    console.log("http://localhost:8001");
});


