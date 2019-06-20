let express=require("express")
let query=require("../config/sqlconnect")
let router=express.Router()

router.get("/list",(req,res)=>{
    let sql=`select * from zerobasis_js`
    query(sql).then((data)=>{
        data=data.map((item)=>{
            item.stem=decodeURIComponent(item.stem)
            item.type=decodeURIComponent(item.type)
            item.option_1=decodeURIComponent(item.option_1)
            item.option_2=decodeURIComponent(item.option_2)
            item.option_3=decodeURIComponent(item.option_3)
            item.option_4=decodeURIComponent(item.option_4)
            item.result=decodeURIComponent(item.result)

            return item
        })


        res.render("list",{list:data})
    })
   
})


router.get("/detail/:id",(req,res)=>{
    let sql=`select * from zerobasis_js`
    query(sql).then((data)=>{
        data=data.map((item)=>{
            item.stem=decodeURIComponent(item.stem)
            item.type=decodeURIComponent(item.type)
            item.option_1=decodeURIComponent(item.option_1)
            item.option_2=decodeURIComponent(item.option_2)
            item.option_3=decodeURIComponent(item.option_3)
            item.option_4=decodeURIComponent(item.option_4)
            item.result=decodeURIComponent(item.result)

            return item
        }).find((jtem)=>{
            if(jtem.id==req.params.id){
                return true
            }else{
                return false
            }
        })


        res.render("detail",{data:data?data:{}})
    })

    
})






module.exports=router