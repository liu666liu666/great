
require("./test")

// console.log(process.env.name)
// console.log(__dirname)
// console.log(process.cwd())

let http=require("http")
http.createServer((req,res)=>{
    console.log(process.uptime())
    res.end("ok")
    process.on("exit",()=>{
        
    })
    process.exit()
}).listen(3000)