let express=require("express")

let router=express.Router()
let path=require("path")

router.get("/tab",(req,res)=>{
   
    let list=[
        {
            id:1,
            name:"zhangsan"
        },
        {
            id:2,
            name:"lisi"
        },
        {
            id:3,
            name:"wangwu"
        }
    ]



    res.render("index",{name:"1",list:list})
})




module.exports=router