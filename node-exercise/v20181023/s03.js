const http = require('http');
const url = require('url');
const router = require("./model/router");
const app = http.createServer(router);

router.get("/",function(req,res){
    res.send("index");
});
router.get("login",function(req,res){
    res.send("login");
});
app.listen(8001,function(){
    console.log("http://localhost:8001");
});