let express=require("express")


let app=express()


// app.get("/api/test",(req,res)=>{
//     res.send({
//         code:"1000",
//         msg:"test"
//     })
// })

// app.get("/api",(req,res)=>{
//     res.send({
//         code:"1000",
//         msg:"ok"
//     })
// })

// let arr=["zhangsan"]
// app.get('/example/b', function(req, res, next) {
//     console.log('response will be sent by the next function ...');
//    let query=req.query
//     if(arr.includes(query.username)){
//         res.send("shibai")
//     }else{
//         next()
//     }

//  }, function(req, res) {



//     res.send('Hello from B!');
//  });
 

// let arr=["zhangsan"]
// app.get('/example/b', function(req, res, next) {
//     console.log('response will be sent by the next function ...');
  
//     // res.send("shibai")
//     next()

//  }, function(req, res) {

//     // console.log(res.finished)
//     if(!res.finished){
//         res.send('Hello from B!');
//     }
   
//  });


var router = express.Router()


// app.get('/', function(req, res, next) {
//     console.log('1');
//     next(router);
// }, function(req, res, next) {
//     console.log("2")
//     next()
// });

// app.get('/', function(req, res, next) {
//     console.log('3');
//     next();
// }, function(req, res, next) {
//     console.log("4")
// });




// app.get('/', function(req, res, next) {
//     console.log('1');
//     next();
// }, function(req, res, next) {
//     console.log("2")
//     next('router')
// });

// router.get('/', function(req, res, next) {
//     console.log('3');
//     next();
// }, function(req, res, next) {
//     console.log("4")
// });

// app.get("/a/b",(req,res)=>{
//     console.log("2")
//     res.send("2")
// })
// app.get("/a/:b",(req,res)=>{
//     console.log("3")
//     res.send("3")
// })

app.get("/a",(req,res)=>{
    console.log()
    // console.log(req.path)
    // console.log(req.protocol)
    // console.log(req.query)
    // console.log(req.route)
    // console.log(req.get("content-type"))
    // console.log(req.is())
    // res.send("sfs")

    // res.append("names","text/html")
    // res.append("age","12")
    // res.set({
    //     "Cookie":"age=1&addr=beijing"
    // })
    // res.cookie("age",34)
    // console.log(res.get("names"))
    // res.send("sdfds")

    // res.json({name:"1",age:2})


    res.redirect("/b")

})

app.get("/b",(req,res)=>{
    console.log()
   

    res.json({name:"1",age:2})

})



app.listen(3000)