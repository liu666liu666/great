let express=require("express")
let router=express.Router()


router.get("/",(req,res)=>{
    res.send("个人中心a接口")
})
router.get("/a",(req,res)=>{
    res.send("个人中心/a/a主接口")
})
router.get("/b",(req,res)=>{
    res.send("个人中心/a/b接口")
})


module.exports=router