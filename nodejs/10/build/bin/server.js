let http = require("http")
let fs = require("fs")
let path = require("path")
let url = require("url")
let zlib = require("zlib")
let querystring = require("querystring")
let app=require("./httpRequest")
require("../mock/index.js")


//创建服务
http.createServer((req, res) => {



    app.run(req,res)
        
       
        

}).listen(3000)
