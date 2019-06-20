let {exec,spawn,fork}=require("child_process")

// let pro=exec("node ./child.js",(error, stdout, stderr)=>{
//     console.log("out："+stdout)
//     // console.log("error："+stderr)
// })

// pro.on("datas",(data)=>{
//     console.log(data)
// })


// let pro=spawn("node",["child.js"])

// pro.stdout.on("data",(data)=>{
//     console.log(data.toString("utf-8"))
// })

// // pro.stderr.on("data",(data)=>{
// //     // console.log(data)
// // })

// pro.on("close",()=>{

// })


let pro=fork("./child.js")


pro.on("message",(data)=>{
    console.log(data)
})

console.log("主进程执行正常")

// pro.send("主进程信息")