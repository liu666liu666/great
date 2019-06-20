

let fs = require("fs")
let path = require("path")

let zlib = require("zlib")
let url = require("url")



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

//做静态文件渲染
function statics(request, response) {
    let pathname=url.parse(request.url).pathname
    //拼接路劲
        let src = path.join(__dirname,"../src",pathname)
    
    
    //检测路劲是否存在
        fs.stat(src, (err, stats) => {
            //如果不存在，直接相应404页面
            if (err) {
                response.writeHead(404,{"Content-Type":"text/html;charset=utf-8"})
                response.end("<h2>路径不存在</h2>")
            } else {
                //如果存在，判断是文件还是文件夹
                if(stats.isDirectory()){
                    //如果文件夹进行文件的读取，并且查找是否有index.html
                    fs.readdir(src,(err,files)=>{
                        if(!err){
                            let str=`<ul>`
                            //遍历所有当前 文件夹下的所有文件
                            let state=files.some(item => {
                                //如果有index.html直接渲染
                                if(item=="index.html"){
                                    render(path.join(src,item),request,response)
                                    return true
                                }else{
                                    //如果没有index.html，做所有文件的dom拼接
                                    str+=`<li><a href='${pathname=="/"?"":pathname}/${item}'>${item}</a></li>`
                                    return false
                                }
                            });
                            str+="</ul>"
                            //如果state为false,则使用没有找到index.html，做文件夹内容的渲染
                            if(!state){
    
                                response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
                                response.end(str)
                            }
                        }
                    })
                    // 如果是文件，则正常渲染文件
                }else{
                    render(src,request,response)
                }
            }
        })
    }
    
    //文件渲染函数
    function render(src,request,response){
        let ext=path.extname(src).replace(".","")
        //检测当前文件是否有后缀，没有赋默认值
        if(!ext){
            ext="text/plain"
        }
        //创建文件读取流
        let raw = fs.createReadStream(src)
        //检测浏览器是否支持压缩
        let acceptEncoding = request.headers['accept-encoding'];
        if (!acceptEncoding) {
            acceptEncoding = '';
        }
        
        if (/\bdeflate\b/.test(acceptEncoding)) {
            //文件相应根据ext后缀进行contenttype的取值（去minm对象中进行取值）
            response.writeHead(200, {
                'Content-Encoding': 'deflate',
                "Content-Type": mime[ext]+";charset=utf-8"
            });
            //文件压缩
            raw.pipe(zlib.createDeflate()).pipe(response);
        } else if (/\bgzip\b/.test(acceptEncoding)) {
            response.writeHead(200, {
                'Content-Encoding': 'gzip',
                "Content-Type": mime[ext]+";charset=utf-8"
            });
            //文件压缩
            raw.pipe(zlib.createGzip()).pipe(response);
        } else {
            response.writeHead(200, {
                "Content-Type": mime[ext]+";charset=utf-8"
            });
            raw.pipe(response);
        }
    
    }
    
    module.exports=statics