let url=require("url")

let store=Symbol("store")
let statics=require("./staticserver")
let {parse}=require("querystring")
module.exports={
    [store]:new Set(),
    get(url,cb){
        this[store].add({url,method:"get",cb})
    },
    post(url,cb){
        this[store].add({url,method:"post",cb})
    },
    run(req,res){
       let pathurl=url.parse(req.url).pathname;
       console.log(req.method)
       let method=req.method.toLowerCase()
       let state=[...this[store]].some((item)=>{
            if(item.method==method&&item.url==pathurl){
                if(method=="get"){
                    req.query=parse(url.parse(req.url).query)
                    res.send=(arg)=>{
                        res.writeHeader(200,{"content-type":"text/json;charset=utf-8"})
                        res.end(JSON.stringify(arg))
                    }
                   
                    item.cb(req,res)
                }else{
                    let str=""
                    req.on("data",(chuck)=>{
                       
                        str+=chuck
                    })
                   
                    req.on("end",()=>{
                        req.body=parse(str)
                        res.send=(arg)=>{
                            res.writeHeader(200,{"content-type":"text/json;charset=utf-8"})
                            res.end(JSON.stringify(arg))
                        }
        
                        item.cb(req,res)
                    })
    
                }
               
                return true
            }else{
                return false
            }
       })

       if(!state){
            statics(req, res)
       }
    }
}