let express=require("express")
let router=express.Router()


router.use(function(req,res,next){
    console.log("sdfs")
    next()
})

router.get("/",(req,res)=>{
    console.log(req.cookies)
    res.send("产品主接口")
})

router.get("/a",(req,res)=>{
    res.send("产品a接口")
})
router.get("/b",(req,res)=>{
    res.send("产品b接口")
})


module.exports=router