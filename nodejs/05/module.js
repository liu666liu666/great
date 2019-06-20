import obj from "./module/common/one.js/index.js"

let store=112

obj.on("up",()=>{
    console.log(2)
})


obj.emit("up")