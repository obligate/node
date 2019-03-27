const url = require('url');

const packingRes = function (res) {
    let end = res.end;
    res.end = function (data, encoding, callback) {
        if (data && !(data instanceof Buffer) && (typeof data !== 'function')) {
            if (typeof data === 'object') {
                data = JSON.stringify(data);
            } else if (typeof data === 'number') {
                data = data.toString();
            }
        }

        end.call(res, data, encoding, callback);
    };

    res.send = function (data, type) {
        res.writeHead(200,
            {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'text/' + (type || 'plain') + '; charset=UTF-8'
            }
        );
        res.end(data);
    };

    res.sendImg = function (data, type, timeout) {
        res.writeHead(200,
            {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'image/' + (type || 'png'),
                'Content-Length': Buffer.byteLength(data),
                'Cache-Control': 'max-age=' + (timeout || 5184000)
            }
        );
        res.end(data);
    };
    return res;
};

const router= function(){
    const self = this;
    self._get={};
    self._post={};

    const handler = function(req,res){
        packingRes(res);
        const method = req.method.toLowerCase();
        const urlObj = url.parse(req.url,true);
        let pathname = urlObj.pathname;
        if(!pathname.endsWith("/")){
            pathname = pathname+  "/";
        }
        if(self[`_${method}`][pathname]){
            if(method === "get"){
                req.query = urlObj.query;
                self[`_${method}`][pathname](req,res);
            }else{
                // 设置接收数据编码格式为 UTF-8
                // req.setEncoding('utf-8');
                var postData = '';
                // 数据块接收中
                req.on('data', function (postDataChunk) {
                    postData += postDataChunk;
                });
                // 数据接收完毕，执行回调函数
                req.on('end', function () {
                    try {
                        postData = JSON.parse(postData);
                    } catch (e) { }
                    req.query = postData;
                    self['_' + method][pathname](req, res);
                });
            }
        }else{
            res.send("no router")
        }
    };
    handler.get = function(string,callback){
        if(!string.startsWith("/")){
            string = "/" + string;
        }
        if(!string.endsWith("/")){
            string = string + "/";
        }
        self._get[string] = callback;
    };
    handler.post = function(string,callback){
        if(!string.startsWith("/")){
            string = "/" + string;
        }
        if(!string.endsWith("/")){
            string = string + "/";
        }
        self._post[string] = callback;
    };
    return handler;
};


module.exports = router();