const url = require('url');

const changeRes  = function(res){
    res.send = function(data){
        res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
        res.end(data);
    };
    return res;
};

const app = function(){
    const self = this;
    self._get={};
    self._post={};
    const handler  = function(req,res){
        changeRes(res);
        const method = req.method.toLowerCase();
        const urlObj = url.parse(req.url,true);
        let pathname = urlObj.pathname;
        if(!pathname.endsWith("/")){
            pathname +="/";
        }
        let query = urlObj.query;
        if(self[`_${method}`][pathname]){
            if(method === "get"){
                // 把query返回给调用方
                req.query = query;
                self[`_${method}`][pathname](req,res);
            }else{
                var postData = '';
                req.on('data', function (postDataChunk) {
                    postData += postDataChunk;
                });
                // 数据接收完毕，执行回调函数
                req.on('end', function () {
                    try {
                        postData = JSON.parse(postData);
                    } catch (e) { }
                    req.query = postData;
                    self[`_${method}`][pathname](req, res);
                });
            }
        }else{
            res.send(method+ "请求路由地址不存在：" + pathname);
        }

    };
    handler.get = function(string,callback){
        if(!string.startsWith("/")){
            string = "/" + string;
        }
        if(!string.endsWith("/")){
            string += "/";
        }
        self._get[string]=callback;
    };
    handler.post = function(string,callback){
        if(!string.startsWith("/")){
            string = "/" + string;
        }
        if(!string.endsWith("/")){
            string += "/";
        }
        self._post[string]=callback;
    };
    return handler;
};


 module.exports = function (){
     return new app();
 };