const ejs = require('ejs');
const path = require('path');

const app={
    index:function(req,res){
        ejs.renderFile(path.join(__dirname,"../","views","index.ejs"),{title:"首页"},function(err,data){
            res.end(data);
        });
    },
    login: function(req,res) {
        ejs.renderFile(path.join(__dirname, "../", "views", "login.ejs"), {
            title: "登陆页",
            msg: "请登录"
        }, function (err, data) {
            res.end(data);
        });
    },
    dologin:function(req,res){
        let postStr = "";
        req.on("data",function(chunk){
            postStr += chunk;
        });
        req.on("end",function(err,chunk){
            res.end(postStr);
        });
    }
};

module.exports = app;