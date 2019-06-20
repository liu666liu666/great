let express=require("express")
let path=require("path")
let app=express()

app.set('views', path.join(__dirname, 'views'));
// app.engine('.html', require('ejs').__express);
app.set('view engine', 'ejs');

let pagerouter=require("./router/index")
app.use("/",pagerouter)


app.listen(3000)