let fs = require("fs")

// console.log(process.cwd())


// fs.readFile("./test.txt","utf-8",(err,data)=>{
//     console.log(data)
// })

// let data=fs.readFileSync("./test.txt","utf-8")

// console.log(data)


// fs.open('./test.txt', 'r', (err, fd) => {
//     if (err) throw err;
//     fs.fstat(fd, (err, stat) => {
//         if (err) throw err;
//         // 各种操作
//         // console.log(stat)
//         // 必须关闭文件描述符！
//         fs.close(fd, (err) => {
//             if (err) throw err;
//         });
//     });
// });



// fs.open('./test.txt', 'r', (err, fd) => {
//     if (err) throw err;

//     fs.fchmod(fd, "r+", () => {
       
//         fs.write(fd, "tianqihenhao","utf-8", (err, stat) => {
//             if (err) throw err;
//             // 各种操作
//             // console.log(stat)
//             // 必须关闭文件描述符！
//             fs.close(fd, (err) => {
//                 if (err) throw err;
//             });
//         })
//     })


// });



// console.log(fs.readFileSync('./test.txt', 'utf8'));
// // 输出: Node.js

// // 获取要截断的文件的文件描述符
// const fd = fs.openSync('./test.txt', 'r+');

// // 截断文件至前4个字节
// fs.ftruncate(fd, 4, (err) => {
  
//     console.log(fs.readSync(fd,'utf8'));
// });





// fs.writeFile("./test.txt","周一","utf-8",(err,data)=>{
  
//     // fs.readFile("./test.txt","utf-8",(err,data)=>{
//     //     console.log(data)
//     // })
    
// })





// fs.appendFile("./test.txt","周二","utf-8",(err,data)=>{
  
//     fs.readFile("./test.txt","utf-8",(err,data)=>{
//         console.log(data)
//     })
    
// })




// fs.copyFile('./test.txt', './test1.txt', (err) => {
//     if (err) throw err;
//     console.log('source.txt was copied to destination.txt');
// });


// fs.lstat('./test.txt', (err, stats) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(stats);
//     }
// });

// fs.truncateSync("./test.txt",3,()=>{

// })

// fs.readFile("./test.txt","utf-8",(err,data)=>{
//     console.log(data)
// })

// try {
//     fs.unlinkSync("test1.txt")

// } catch (error) {
//     console.log(error)
// }


// fs.watchFile("./test.txt",(err,data)=>{
//     let datas=fs.readFileSync("./test.txt","utf-8")
//     console.log(datas)
    
// })
// fs.unwatchFile("./test.txt",(err,data)=>{
      
// })


// fs.lstat("./test.txt",(err,stats)=>{
//     console.log(stats.isFile())
// })

// fs.mkdirSync("./com")


// let data=fs.readdirSync("./com")
// console.log(data)
// for

// fs.readdir("./com",(err,data)=>{
//     let datas=[]
//     data.forEach(i => {
//         datas.push(fs.readFileSync("./com/"+i,"utf-8"))
//     });
//     console.log(datas)
// })

// fs.stat("./com",(err,stats)=>{
//     console.log(stats)
// })
// try {
//     fs.accessSync("./coms")
//     console.log(22)
// } catch (error) {
//     console.log(error)
// }


// fs.watch("./coms", { recursive: true }, (eventType, filename) => {
//     console.log(eventType)
//     console.log(filename)
// })

// function copyDir(src,target){

// }