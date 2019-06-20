// import { request } from "http";

// import { fstat } from "fs";

// let str="法大师傅撒"

// console.log(str.toString(32))



// const buf = Buffer.from('sfsaf', 'ascii');

// // 输出 72756e6f6f62
// console.log(buf.toString('hex'));
// console.log(buf.toString('utf-8'));

// // 输出 cnVub29i
// console.log(buf.toString('base64'));
// // 输出 cnVub29i
// console.log(buf.toString('ascii'));

// let key="dsfsafsfs"


// let buf=Buffer.from(key,"utf-8")



// console.log(buf.toString("hex"))


// let name="zhangsan"

// let names=Buffer.from(name+key,"utf-8")

// // console.log(buf.toString("hex").length)
// console.log(names.toString("hex").slice(0,(-buf.toString("hex").length)))


// let buf1=Buffer.from("sfsfds")
// let buf=Buffer.from(buf1)
// console.log(buf.toString("utf-8"))


// let buf=Buffer.alloc(255)
// // buf.write("sfsfsa")
// buf.write('{"name":"nihao"}')
// // console.log(buf.toString("utf-8"))
// // console.log(buf.slice(0,30).toJSON())


// let fs=require("fs")
// let buf=Buffer.alloc(10000)
// fs.readFile("./test.txt",(err,data)=>{
//     if(err) throw err
//     console.log(data.toString("utf-8"))
//     let bf=data.toString("utf-8")
//     buf.write(bf)
//     buf=buf.slice(0,data.length)
//     console.log(buf.length)
//     // buf.slice()
// })




// let Event=require("events")

// let event=new Event()

// event.on("up",(data)=>{
//     console.log(data)
// })


// event.emit("up",12)



// var fs = require("fs");
// var data = '';

// // 创建可读流
// var readerStream = fs.createReadStream('test.txt');

// // 设置编码为 utf8。
// readerStream.setEncoding('UTF8');

// // 处理流事件 --> data, end, and error
// readerStream.on('data', function(chunk) {
//   data += chunk;
// });

// readerStream.on('end',function(){
//   console.log(data);
// });

// readerStream.on('error', function(err){
//   console.log(err.stack);
// });

// // console.log("程序执行完毕");



// var fs = require("fs");
// var data = '天气很多好 ';

// // 创建一个可以写入的流，写入到文件 output.txt 中
// var writerStream = fs.createWriteStream('output.txt');

// // 使用 utf8 编码写入数据
// writerStream.write(data,'UTF8');

// // 标记文件末尾
// writerStream.end();

// // 处理流事件 --> data, end, and error
// writerStream.on('finish', function() {
//    console.log("写入完成。");
// });

// writerStream.on('error', function(err){
//   console.log(err.stack);
// });




// let fs=require("fs")

// let readerStream=fs.createReadStream("./test.txt")
// let writerStream=fs.createWriteStream("./output.txt")

// readerStream.setEncoding("utf-8")
// readerStream.on("data",(chunk)=>{
//     console.log(1)
//     writerStream.write(chunk,"utf-8")
// })


// readerStream.on("end",()=>{
//     writerStream.end()
// })


// writerStream.on("finish",()=>{
//     console.log("文件读取完毕，且写入完毕")
// })


var fs = require("fs");

// 创建一个可读流
var readerStream = fs.createReadStream('input.txt');

// 创建一个可写流
var writerStream = fs.createWriteStream('output.txt');

// 管道读写操作
// 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
readerStream.pipe(writerStream);
console.log("程序执行完毕");