const ejs = require('ejs');
const path = require('path');
const fs =require('fs');
const app = {
    home:function(req,res){
        console.log('home');
        ejs.renderFile(path.join(__dirname,'..','views','index.ejs'),{title:'首页',msg:'你好，世界！！'},function(err,data){
            res.end(data);
        });
    },
    login:function(){
        ejs.renderFile(path.join(__dirname,'..','views','login.ejs'),{title:'登录'},function(err,data){
            res.end(data);
        });
    },
    dologin: function (req, res) {
        let postStr = '';
        req.on('data', function (chunk) {
            postStr += chunk;
        });
        req.on('end', function (err, chunk) {
            console.log(postStr);
            fs.appendFile('login.txt', postStr + '\n', function (err) {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log('写入数据成功');
            });
            res.end("<script>alert('登录成功');history.back();</script>")
        });
    },
};

module.exports = app;