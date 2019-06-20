//加载所需要的模块
var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');
var querystring = require('querystring');
var fsHandle = require("./fsHandle")
    //mime类型
var mime = {
    "css": "text/css",
    "gif": "image/gif",
    "html": "text/html",
    "ico": "image/x-icon",
    "jpeg": "image/jpeg",
    "jpg": "image/jpeg",
    "js": "text/javascript",
    "json": "application/json",
    "pdf": "application/pdf",
    "png": "image/png",
    "svg": "image/svg+xml",
    "swf": "application/x-shockwave-flash",
    "tiff": "image/tiff",
    "txt": "text/plain",
    "wav": "audio/x-wav",
    "wma": "audio/x-ms-wma",
    "wmv": "video/x-ms-wmv",
    "xml": "text/xml",
    "manifest": "text/cache-manifest"
};
//文件读取以及响应函数

//文件读取以及响应函数

function renderFile(res, filePath) {
    let mimeType = path.extname(filePath).substr(1)
    res.writeHead(200, { "content-type": mime[mimeType] + ";charset=utf-8" })
        //建立流对象，读文件
    var stream = fs.createReadStream(filePath);
    //错误处理
    stream.on('error', function() {
        res.writeHead(500, { "content-type": contentType });
        res.end("<h1>500 Server Error</h1>");
    });
    //读取文件
    stream.pipe(res);
    // try {
    //     let data = fs.readFileSync(filePath, "utf-8")
    //     let mimeType = path.extname(filePath).substr(1)
    //     res.writeHead(200, { "content-type": mime[mimeType] + ";charset=utf-8" })
    //     res.end(data)
    // } catch (error) {
    //     console.log(error)
    // }

}
var obj = {
    ...fsHandle,
    arr: [],
    get(url, cb) {
        obj.arr.push({
            type: "get",
            url,
            cb
        })
    },
    post(url, cb) {

        obj.arr.push({
            type: "post",
            url,
            cb
        })
    },
    typeMethod(url, req, res, i) {
        if (i.type == "get") {
            req.query = querystring.parse(url.query)
            res.send = function(option) {
                res.writeHead(200, { "content-type": "text/json;charset=utf-8" })
                res.end(JSON.stringify(option))
            }
            i.cb(req, res)
        } else {
            var data = ""
            req.on("data", (str) => {
                data += str
            })
            req.on("end", () => {

                req.body = querystring.parse(data)
                res.send = function(option) {
                    res.writeHead(200, { "content-type": "text/json;charset=utf-8" })
                    res.end(JSON.stringify(option))
                }
                i.cb(req, res)
            })

        }

    },
    filter(url, req, res) {

        return obj.arr.some((i) => {
            if (i.url == url.pathname) {
                this.typeMethod(url, req, res, i)
                return true
            } else {
                return false
            }
        })
    },
    //服务配置文件
    run(req, res) {
        // console.log(req)
        let currentUrl = url.parse(req.url).pathname

        let state = obj.filter(url.parse(req.url), req, res)

        if (!state) {
            //根据请求生成文件地址
            let pathUrl = url.parse(req.url)
            let filePath = path.join(__dirname, "../src", pathUrl.pathname)
                //根据请求地址判断是文件还是文件夹
            fs.stat(filePath, (err, stats) => {
                //判断此路径是否存在，不存在相应404页面
                if (err) {
                    res.writeHead(404, { "content-type": "text/html;charset=utf-8" })
                    res.end("<h2>文件不存在</h2>")
                }
                //查看err是否已经res.end()
                if (!res.finished) {
                    //路径是文件夹，将文件夹中的所有文件和子文件夹显示在页面中
                    if (stats.isDirectory()) {
                        //页面内容的拼接

                        var html = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>${path.basename(filePath)}</title></head><body><ul>`
                            //读取文件夹中所有文件以及文件夹
                        fs.readdir(filePath, (err, files) => {
                            var resFinished = true
                            if (err) {
                                console.log(err)
                                html += `<li>地址错误</li></ul></body></html>`
                            } else {
                                //如果当前文件夹中存在index.html则直接响应html，不展示文件夹中内容
                                let state = files.some((i) => {
                                    if (i == "index.html") {
                                        return true
                                    } else {
                                        if (pathUrl.pathname.slice(pathUrl.pathname.length - 1) == "/") {
                                            var aPath = pathUrl.pathname + i
                                        } else {
                                            var aPath = pathUrl.pathname + "/" + i
                                        }

                                        html += `<li><a href="${aPath}">${i}</a></li>`
                                        return false
                                    }
                                });
                                //如果state为true，则index.html存在，直接找到index.html的路径进行文件响应
                                if (state) {
                                    var aPath = path.join(filePath, "./index.html")

                                    renderFile(res, aPath)
                                    resFinished = false
                                } else {
                                    //如果state不为true，则继续拼接页面
                                    html += `</ul></body></html>`
                                }

                            }
                            //检测是否当前请求已经响应，如果响应则有index.html,如果还未响应则没有index。html，进行文件内容的展示
                            if (resFinished) {
                                res.writeHead(200, { "content-type": "text/html" + ";charset=utf-8" })
                                res.end(html)
                            }

                        })

                        //路径为文件，直接执行响应函数
                    } else {

                        renderFile(res, filePath)
                    }
                }



            })
        }

    }

}

module.exports = obj