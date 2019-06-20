let http=require("http")

console.log(process.argv)
let port=3000+parseInt(process.argv.slice(-1)[0])
http.createServer((req,res)=>{
    
    res.end("端口为："+port)
}).listen(port,()=>{
    console.log("port:"+port)
})

// const http = require('http');

// let port=3000
// console.log(port)
// const server = http.createServer((req, res) => {
//     throw new Error("程序断开")
    
//     res.writeHead(200,{"content-type":"text/html;charset=utf-8"})
//     res.end(`请求至端口:${port};\r\n请求至进程：${process.pid}`)
    
// });

// server.listen(port, "127.0.0.1", () => {
//     console.log(`server started at http://127.0.0.1:${port}`);
// });
