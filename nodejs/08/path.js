let path=require("path")
let fs=require("fs")
var iconv = require('iconv-lite');
// console.log(path.basename("/src/name/test/a.txt",".txt"))
// console.log(path.dirname("/src/name/test/a.txt"))
// console.log(path.extname("/src/name/test/a.txt"))


// let pat=path.format({
//     root: '/ignored/',
//     dir: '/home/user/dir',
//     base: 'file.txt',
//     name: 'file',
//     ext: '.js'
// });

// console.log(pat)


// let obj=path.parse("https://www.baidu.com/music/a.mp3?id=1")

// console.log(path.format(obj))
// let url=require("url")
// let obj=url.parse("https://www.baidu.com/music/a.mp3?id=1")

// console.log(obj)

// console.log(__dirname)
// console.log()

// console.log(path.join("/assets","css","index.css"))





// let data=fs.readFileSync(path.join(__dirname,"../test.txt"),"utf-8")
// console.log(data)


// console.log(__dirname)
// console.log(path.join(__dirname,"test.txt"))
// console.log(path.join(__dirname,"src","../test.txt",))

// console.log(__dirname+"..\\test.txt")

// function readDirectory(dirPath) {
//     // console.log(fs.statSync(dirPath))
//     fs.stat(dirPath, (err, stats) => {
//         if (err) {
//             console.log('Not Found Path : ', dirPath)
//             return
//         } else if (stats.isFile()) {
//             var buff = fs.readFileSync(dirPath);
 
//             if (buff.length >= 3 && buff[0].toString(16).toLowerCase() == "ef" && buff[1].toString(16).toLowerCase() == "bb" && buff[2].toString(16).toLowerCase() == "bf") {
//                 //EF BB BF 239 187 191
//                 console.log('\发现BOM文件：', dirPath, "\n");
 
//                 buff = buff.slice(3);
//                 fs.writeFile(filePath, buff.toString(), "utf8",(err)=>{
//                     if(err) throw err
//                 });
//             } else {
//                 console.log("未发现bom文件")
//             }
//         } else if (stats.isDirectory()) {
//             var files = fs.readdirSync(dirPath);
 
//             files.forEach(function(file) {
//                 var filePath = dirPath + "/" + file;
//                 let stat = fs.statSync(filePath);
//                 if (stat.isDirectory()) {
//                     readDirectory(filePath)
//                 } else {
//                     var buff = fs.readFileSync(filePath);
 
//                     if (buff.length >= 3 && buff[0].toString(16).toLowerCase() == "ef" && buff[1].toString(16).toLowerCase() == "bb" && buff[2].toString(16).toLowerCase() == "bf") {
//                         //EF BB BF 239 187 191
//                         console.log('\发现BOM文件：', filePath, "\n");
 
//                         buff = buff.slice(3);
//                         fs.writeFile(filePath, buff.toString(), "utf8",(err)=>{
//                             if(err) throw err
//                         });
//                     } else {
//                         console.log("未发现bom文件")
//                     }
//                 }
//             })
//         }
//     })
//  }
//  readDirectory(path.join(__dirname));



// setTimeout(()=>{
//     let data=fs.readFileSync(path.join(__dirname,"./index.html"))

//     console.log(data)
// },1000)





// let bu=iconv.encode("中文你好","GBK")
// let str2=iconv.decode(bu,"GBK")


// let bu1=Buffer.from(bu)

// console.log(str2)

// fs.writeFileSync(path.join(__dirname,"./test.txt"),bu)