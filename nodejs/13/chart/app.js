let express=require("express")
let  cookieParser=require("cookie-parser")
let  bodyParser=require("body-parser")
let app=express()

let server=require("http").createServer(app)
global.io=require("socket.io")(server)


let path=require("path")

//第三方中间件
app.use(cookieParser())
app.use(bodyParser())
//内置中间件
app.use(express.static(path.join(__dirname,"./static")))

//应用级中间件
app.use(function(req,res,next){
    next()
})



//路由级中间件
let chartapi=require("./api/chart")
app.use("/",chartapi)


let getjsapi=require("./api/getjs")
app.use("/",getjsapi)


//错误中间件
app.use(function(req,res){
   
    res.status(404).send("找不到路劲")
})

app.use(function(err,req,res){
    console.error(err)
    res.status(500).send("服务器错误")
})





server.listen(3000)

