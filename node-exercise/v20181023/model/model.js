const ejs = require('ejs');

const app={
    home:function(req,res){
        res.end('index');
    },
    login:function(req,res){
        ejs.renderFile('./views/form.ejs',{title:'登录'},function(err,data){
            res.end(data);
        })
    },
    dologin:function(req,res){
      let postbody = "";
      req.on("data",function(chunk){
          postbody +=chunk;
      });
      req.on("end",function(err,chunk){
         res.end(postbody);
      });
    },
};


module.exports = app;