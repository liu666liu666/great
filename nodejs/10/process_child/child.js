
// throw new Error("2222")


// setTimeout(()=>{
//     console.log(111)
// },3000)

// process.on("message",(data)=>{
    
//     process.send("接受到主进程信息："+data)
// })


var num=0
for (let i = 0; i < 1000000000; i++) {
    num++
}

process.send(num)
