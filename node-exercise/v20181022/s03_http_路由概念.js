const http = require('http');
const route = require('./model/http_route');
const app = route();

const server = http.createServer(app);

app.get('/', function (req, res) {

    res.send('首页');
});
app.get('/login', function (req, res) {

    res.send('login');
});

app.get('/register', function (req, res) {

    res.send('register');

});

app.post('/test', function (req, res) {
    console.log('POST', req.query);
    res.send(req.query);
});

server.listen(8001,function(){
    console.log("http://localhost:8001");
});