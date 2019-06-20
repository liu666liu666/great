let express=require("express")
let router=express.Router()
let query=require("../config/connectsql")
// router.get("/getuser",(req,res)=>{
    
//     let sql=`select * from user`

//     query(sql,(err,rows)=>{
//         res.send(rows)
//     })
// })



router.get("/getuser",(req,res)=>{
    
    let sql=`select * from user`

    query(sql).then((rows)=>{
        res.send(rows)
    }).catch((err)=>{
        console.log(err)
    })
})


module.exports=router