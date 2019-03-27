//引入模块
var http = require('http');
var fs = require('fs');
 path = require('path');
var url = require('url');


var mimeModel = require('./model/getmimefromfile.js');


console.log(mimeModel.getMime(fs, '.css'));
