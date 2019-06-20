
var http = require('http');
let fs=require("fs")
// //创建请求配置项
// const options = {
//     hostname: 'blog.cygdream.com',
//     port: 80,
//     path: '/api/front/article/getArticleAll',
//     method: "get"
// };

// //创建请求
// var request = http.request(options, (res) => {
//     // let data=""
//     //     res.on('data', (chunk) => {
//     //         // console.log("\r\n\r\n\r\n")
//     //         // console.log(`响应主体: ${chunk}`);
//     //         data+=chunk
//     //     });
//     //     res.on('end', () => {
//     //         let writeS=fs.createWriteStream("./text.js")
//     //         writeS.write(data,"utf-8")
//     //         console.log('响应中已无数据。');
//     //     });

//     let writeS=fs.createWriteStream("./text.json")

//     res.pipe(writeS)

//     })
//     // request.setHeader('Content-Type', 'application/json');
//     console.log(request.getHeader("Content-Type") )
//     request.end()

    


// //     //请求的失败监听
// // request.on('error', (e) => {
// //     console.error(`请求遇到问题: ${e.message}`);
// // });
// // // //设置请求头
// // request.setHeader('Content-Type', 'application/json');
// // // 删除请求头
// // request.removeHeader("Content-TYPE")
// // // 写入数据到请求主体，
// // request.write("sfsdf");
// // //结束发送请求
// // // request.end()

// // const contentType = request.getHeader('Content-Type')
// // console.log(contentType)

// var iconv = require('iconv-lite');

// http.get("http://top.baidu.com/?fyb=PcReDianAla01",(res)=>{
    
//     let data=""
//     res.on("data",(chuck)=>{
//         data+=chuck
//     })
//     res.on("end",()=>{
//         let reg=/<a\s+target="_blank"\s+title=(\S+)/g
//         data=iconv.decode(Buffer.from(data),"GBK")
//         data.replace(reg,(r1,r2)=>{
//             console.log(r2)
//         })
        
//     })
// })





// var http = require('http');
// var server=http.createServer(function(req, res) {
//     console.log(req)
//     res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8',"names":"nihao","dayss":"fds" });

//     res.write(`<!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <meta http-equiv="X-UA-Compatible" content="ie=edge">
//         <title>Document</title>
//     </head>
//     <body>
//         你的页面报错
//     </body>
//     </html>`)
//     res.end();
    
// })

// server.listen(3000,"127.0.0.1",()=>{
//     console.log("启动成功：http://127.0.0.1:3000")
// });




