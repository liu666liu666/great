let fs=require("fs")

fs.chmod("./test.txt",0000,()=>{
    fs.writeFileSync("./test.txt","你好","utf-8")
    console.log(fs.readFileSync("./test.txt","utf-8"))

})