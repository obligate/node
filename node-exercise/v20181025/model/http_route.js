const url = require('url');

const packRes = function(res){
    res.send = function(data){
        res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
        end(data);
    };
    return res;
};
const router = function(){
    const self = this;
    this._get= {};
    this._post= {};

    const handler = function(req,res){
        packRes(res);
        const method = req.method.toLowerCase();
        const urlObj = url.parse(req.url,true);
        let pathname = urlObj.pathname;
        if(!pathname.endsWith("/")){
            pathname +="/";
        }
        if(self[`_${method}`][pathname]){
            if(method === "get"){
                req.query = urlObj.query;
                self[`_${method}`][pathname](req,res);
            }else{
                var postData = '';
                req.on('data', function (postDataChunk) {
                    postData += postDataChunk;
                });
                req.on('end', function () {
                    try {
                        postData = JSON.parse(postData);
                    } catch (e) { }
                    req.query = postData;
                    self['_' + method][pathname](req, res);
                });
            }
        }else{
            res.end("没有配置路由");
        }
    };
    handler.get = function(string,callback){
        if(!string.startsWith("/")){
            string = "/" + string;
        }
        if(!string.endsWith("/")){
            string = string + "/";
        }
        self._get[string] =callback;
    };
    handler.post = function(string,callback){
        if(!string.startsWith("/")){
            string = "/" + string;
        }
        if(!string.endsWith("/")){
            string = string + "/";
        }
        self._post[string] =callback;
    };
    return handler;
};

module.exports = function(){
    return new router();
};