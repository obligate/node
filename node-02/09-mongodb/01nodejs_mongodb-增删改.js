/**
 * nodejs操作mongodb3.x数据库
 * 1.安装mongodb
 *   npm install mongodb --save
 * 2. 引入mongodb下面的MongoClient
 *   const MongoClient = require('mongodb').MongoClient;
 * 3. 定义数据库连接的地址 以及配置数据库
 *     const url = 'mongodb://localhost:27017/';
 *     const dbName = 'itying'
 * 4.nodejs连接数据库
 *       MongoClient.connect(url,function(err,client){
 *          const db = client.db(dbName);  //数据库db对象
 *        })
 * 5.操作数据库
 *  MongoClient.connect(url,function(err,client){
 *      const db = client.db(dbName);  数据库db对象
 *      MongoClient.connect(url,function(err,db){
 *          db.collection('user').insertOne({"name":"张三"},function(err,result){
 *              db.close() //关闭连接
 *          }
 *      }
 *  }
 */

const http = require('http');
const ejs = require('ejs');
const url = require('url');
const path = require('path');
const MongoClient = require('mongodb').MongoClient; // 引入数据库 MongoClient

const dburl = 'mongodb://localhost:27017/';  // 连接数据库的地址
const dbName = 'itying';    // 数据库地址

const app = require('./model/express-route.js');
http.createServer(app).listen(8001,function(){
    console.log("http://localhost:8001");
});


app.get('/', function (req, res) {
    const msg = '这是数据库的数据';
    console.log(path.join(__dirname,'views','index.ejs'));
    ejs.renderFile(path.join(__dirname,'views','index.ejs'), {msg: msg}, function (err, data) {
        res.send(data);
    })
});


app.get('/add', function (req, res) {   //增加数据
    MongoClient.connect(dburl, {useNewUrlParser: true}, function (err, client) {  // 连接数据库
        if (err) {
            console.log(err);
            console.log('数据库连接失败');
            return false;
        }
        let db = client.db(dbName);
        //增加数据
        db.collection('user').insertOne({
            "name": "黄",
            "age": 20
        }, function (error, result) {
            if (error) {
                console.log('增加数据失败');
                return false;
            }
            res.send('增加数据成功');
            client.close(); // 关闭数据库
        })
    })
});


app.get('/edit', function (req, res) {
    //增加数据
    MongoClient.connect(dburl, {useNewUrlParser: true}, function (err, client) {
        if (err) {
            console.log(err);
            console.log('数据库连接失败');
            return false;
        }
        let db = client.db(dbName);
        db.collection('user').updateOne({"name": "peter"}, {
            $set: {
                "age": 666
            }
        }, function (error, data) {
            if (error) {
                console.log('修改数据失败');
                return false;
            }
            // console.log(data);
            res.send('修改数据成功');
            client.close();  /*关闭数据库*/
        })
    })
});


app.get('/delete', function (req, res) {
    //增加数据
    //delete?name=lisi
    //console.log(url.parse(req.url,true));
    const query = url.parse(req.url, true).query;
    // console.log(query.name);
    const name = query.name;
    MongoClient.connect(dburl, {useNewUrlParser: true}, function (err, client) {
        if (err) {
            console.log(err);
            console.log('数据库连接失败');
            return false;
        }
        let db = client.db(dbName);
        db.collection('user').deleteOne({"name": name}, function (error, data) {
            if (error) {
                console.log('删除失败');
                return false;
            }
            // console.log(data);
            res.send('删除数据成功');
            client.close();
        })
    })
});

