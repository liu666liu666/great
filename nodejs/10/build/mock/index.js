

let { parse }=require("querystring");
let app=require("../bin/httpRequest")
app.get("/api",(req,res)=>{
    let query=req.query

    res.send("天气"+query.name)
    
})
app.post("/register",(req,res)=>{
    console.log(req.body)
    res.send("天气号"+req.body.name)
    
})
app.post("/login",(req,res)=>{
    console.log(req.body)
    res.send(req.body)
    
})