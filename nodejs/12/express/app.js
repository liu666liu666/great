let express = require("express")
let app = express()
let cookieParser = require("cookie-parser")
let bodyParser = require("body-parser")
let path=require("path")

app.use(cookieParser())
app.use(bodyParser())
// app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,"./static")))



// app.use(function (req, res, next) {

//     let cookies = req.headers.cookie
//     let data = cookies.split(";")
//     let obj = data.reduce((pre, cur) => {
//         let arr = cur.split("=")
//         let key = arr[0].replace(/\s+/g, "")
//         let val = arr[1].replace(/\s+/g, "")
//         pre[key] = val
//         return pre
//     }, {})

//     req.cookies = obj
//     next()
// })


// /pc

app.get("/", (req, res) => {
    // console.log(req.body.userId)
    // throw new Error("baocuo")

    console.log(req.query)
    res.send("ik")
})


let projectApi = require("./apiRouter/project")
//产品相关路由
app.use("/project", projectApi)




//个人中心相关路由
let pcApi = require("./apiRouter/pc")
app.use("/pc", pcApi)



//获取用户列表


let chartApi = require("./apiRouter/chart")
app.use("/chart", chartApi)


app.use(function (req, res, next) {
    res.status(404).send("地址找不到")
})

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('后台报错了')
})



app.listen(3000)