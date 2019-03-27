var http=require('http');
var ejs=require('ejs');
var MongoClient = require('mongodb').MongoClient;
var DBurl = 'mongodb://localhost:27017/';
var dbName = 'itying';

var app=require('./model/express-route.js');
http.createServer(app).listen(3000,function(){
    console.log("http://localhost:3000");
});

app.get('/',function(req,res){

    MongoClient.connect(DBurl,{useNewUrlParser: true},function(err,client){
        if(err){

            console.log('连接数据库失败');
            return;
        }

        let db = client.db(dbName);
        //查询数据
        var list=[];  /*放数据库里面查询的所有数据*/

        var result=db.collection('user').find({});


        result.each(function(error,doc){


            //console.log(doc);
                if(error){
                    console.log(error);
                }else{

                    if(doc!=null){
                        list.push(doc);

                    }else{  /*doc==null表示数据循环完成*/

                        /*获取数据以后*/
                        //console.log(list);

                        ejs.renderFile('views/index.ejs',{list:list},function(err,data){
                            res.send(data);
                        })

                    }

                }

        })

        //console.log(result);

    })

})

app.get('/add',function(req,res){

    MongoClient.connect(DBurl,{useNewUrlParser: true},function(err,client){

        if(err){

            console.log('连接数据库失败');
            return;
        }

        let db = client.db(dbName);
        db.collection('user').insertOne({"name":'lisi',"age":40},function(error,data){

            if(error){
                console.log('增加数据失败');
                return;
            }
            console.log(data);

            res.send('增加数据成功');

            client.close();

        })


    })
})


