var express = require("express")
let router = express.Router()
let query = require("../config/connect.1")

router.get("/getexam",(req,res)=>{
    let sql=`select * from zerobasis_js`
    query(sql).then((data)=>{
        data=data.map((item)=>{
            item.stem=decodeURIComponent(item.stem)
            item.stem_type=decodeURIComponent(item.stem_type)
            item.option_1=decodeURIComponent(item.option_1)
            item.option_2=decodeURIComponent(item.option_2)
            item.option_3=decodeURIComponent(item.option_3)
            item.option_4=decodeURIComponent(item.option_4)
            return item
        })

        res.send(data)
    })


})

module.exports=router