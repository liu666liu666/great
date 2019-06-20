let express=require("express")

let app=express()
let path=require("path")

app.set("views",path.join(__dirname,"./views"))

app.set("view engine","ejs")

let pageRouter=require("./router/index")
app.use("/",pageRouter)


app.listen(3000)