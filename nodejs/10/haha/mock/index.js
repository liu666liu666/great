var app = require("../bin/httpRequest")

//使用说明：
//1、app.get()和app.post()分别为开放get和post 接口，
//2、第一个参数为接口地址，第二个参数为处理函数
//3、对于get传递的参数，使用req.query进行获取
//4、对于post传递的参数，使用req.body进行获取
//5、使用res.send()为响应数据的方法，支持对象，数组，字符串

//demo:

// console.log(io)

let data=[
    {
        name:"小明",
        msg:"nihao"
    }
]

io.on("connection",(socket)=>{
    socket.on("data",(data)=>{
        console.log(data)
    })
    socket.on("server",(datas)=>{
        console.log(datas)
        data.push(datas)
        socket.broadcast.emit("client",data)
        socket.emit("client",data)
    })

    socket.emit("client",data)

    // socket.disconnect();
})

