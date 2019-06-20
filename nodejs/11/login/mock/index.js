var app = require("../bin/httpRequest")
var fs=require("fs")
var path=require("path")
let pathfile=path.join(__dirname,"./data.json")
let file={
    write(filename,content){

        fs.stat(filename,(err,stats)=>{
            if(err){
                fs.writeFile(filename,JSON.stringify([content]),"utf-8",(err)=>{
                    console.log(err)
                })
            }else{
                let data=JSON.parse(fs.readFileSync(filename,"utf-8"))
                data.push(content)
                fs.writeFile(filename,JSON.stringify(data),"utf-8",(err)=>{
                    console.log(err)
                })
            }
        })
    },
    read(filename){
        try {
            return JSON.parse(fs.readFileSync(filename))
        } catch (error) {
            return []
        }
        
    }
}


app.get("/register",(req,res)=>{
    let query=req.query
    console.log(query)

    let data=file.read(pathfile)
    let state=data.some((item)=>{
        if(item.username==query.username){

            return true
        }else{
            return false
        }
    })
    if(state){
        res.send({
            code:1001,
            msg:"注册失败"
        })
    }else{

        // data.push(pathfile,Object.assign(query,{userId:Math.floor(Math.random()*900000+100000)}))

        file.write(pathfile,Object.assign(query,{userId:Math.floor(Math.random()*900000+100000)}))
        res.send({
            code:1000,
            msg:"注册成功"
        })
    }
    
})

app.get("/login",(req,res)=>{
    let query=req.query
    let data=file.read(pathfile)
    let state=data.some((item)=>{
        if(item.username==query.username&&item.password==query.password){

            return true
        }else{
            return false
        }
    })
    if(state){
        res.send({
            code:1000,
            msg:"登录成功"
        })
    }else{
        res.send({
            code:1001,
            msg:"登录失败"
        })
    }
    
})