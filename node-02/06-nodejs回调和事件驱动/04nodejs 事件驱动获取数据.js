/**
 * Created by Administrator on 2017/7/3 0003.
 */
var fs = require('fs');
var events = require('events');

var EventEmitter = new events.EventEmitter();


function getMime() {
    fs.readFile('mime.json', function (err, data) {
        EventEmitter.emit('data', data)
    })
}

getMime(); // 发送数据到广播

// 监听广播数据
EventEmitter.on('data', function (mime) {
    console.log(mime.toString());
})
