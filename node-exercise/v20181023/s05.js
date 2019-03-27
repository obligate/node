const express = require('express');
const app = express();
const admin = require('./router/admin');
const index = require('./router/index');

app.use("/admin",admin);
app.use("/",index);
app.listen(8001,function(){
    console.log("http://localhost:8001");
});