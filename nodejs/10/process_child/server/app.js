let {fork}=require("child_process")

let os=require("os").cpus().length

console.log(os)

for(var i=0;i<8;i++){
    fork("./index.js",[i])
}






// const fork = require('child_process').fork;
// let num=1
// function start(){
//     let pro=fork("./index.js")
//     pro.on("exit",()=>{
//         console.log("主进程已经断开，重新启动"+num+"次")
//         //杀死当前进程
//         pro.kill();
//         start()
//         num++
//     })
//     pro.on("error",()=>{
//         console.log("主进程已经断开，重新启动"+num+"次")
//         //杀死当前进程
//         pro.kill();
//         start()
//         num++
//     })
// }
// console.log("第一次启动")
// start()
