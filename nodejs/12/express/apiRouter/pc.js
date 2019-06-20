let express=require("express")
let router=express.Router()

let child=require("./pca")

router.get("/",(req,res)=>{
    console.log(22)
    res.send("个人中心主接口")
})

router.use("/a",child)
router.get("/b",(req,res)=>{
    res.send("个人中心b接口")
})


module.exports=router