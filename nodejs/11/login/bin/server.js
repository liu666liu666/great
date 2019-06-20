//加载所需要的模块
var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');
require("../mock/index.js")
const exec = require('child_process').exec

var app = require("./httpRequest")


//1、创建服务；
http.createServer(function(req, res, next) {
    app.run(req, res)
}).listen(8889, function() {
    exec('start http://127.0.0.1:8889', (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
    });

})