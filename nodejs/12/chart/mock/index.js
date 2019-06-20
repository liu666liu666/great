var app = require("../bin/httpRequest")
var fs = require("fs")
var path = require("path")
let pathfile = path.join(__dirname, "./data.json")
let file = {
    write(filename, data) {

        fs.stat(filename, (err, stats) => {
            if (err) {
                fs.writeFile(filename, JSON.stringify(data), "utf-8", (err) => {
                    console.log(err)
                })
            } else {

                fs.writeFile(filename, JSON.stringify(data), "utf-8", (err) => {
                    console.log(err)
                })
            }
        })
    },
    read(filename) {
        try {
            return JSON.parse(fs.readFileSync(filename))
        } catch (error) {
            return []
        }

    }
}


app.get("/register", (req, res) => {
    let query = req.query
    console.log(query)

    let data = file.read(pathfile)
    let state = data.some((item) => {
        if (item.username == query.username) {

            return true
        } else {
            return false
        }
    })
    if (state) {
        res.send({
            code: 1001,
            msg: "注册失败"
        })
    } else {

        // data.push(pathfile,Object.assign(query,{userId:Math.floor(Math.random()*900000+100000)}))
        let data = file.read(pathfile)
        data.push(Object.assign(query, {
            userId: Math.floor(Math.random() * 900000 + 100000)
        }))
        file.write(pathfile, data)
        res.send({
            code: 1000,
            msg: "注册成功"
        })
    }

})

app.get("/login", (req, res) => {
    let query = req.query
    let data = file.read(pathfile)
    let result = {}
    let state = data.some((item) => {
        if (item.username == query.username && item.password == query.password) {
            result = item.userId
            return true
        } else {
            return false
        }
    })
    if (state) {
        res.send({
            code: 1000,
            userId: result,
            msg: "登录成功"
        })
    } else {
        res.send({
            code: 1001,
            msg: "登录失败"
        })
    }

})

//获取用户详细信息
app.get("/usermsg", (req, res) => {
    let query = req.query
    let data = file.read(pathfile)
    let result = {}
    let state = data.some((item) => {
        if (item.userId == query.userId) {
            result = item
            return true
        } else {
            return false
        }
    })
    if (state) {
        res.send({
            code: 1000,
            data: result,
            msg: "获取成功"
        })
    } else {
        res.send({
            code: 1001,
            msg: "获取失败"
        })
    }

})

// 创建房间号
app.post("/creatChart", (req, res) => {
    let query = req.body

    let chartObj = {
        roomId: query.roomId,
        chartMsg: [

        ]
    }
    let data = file.read(path.join(__dirname, "chart.json"))

    let state = data.some((item) => {
        if (item.roomId == chartObj.roomId) {
            return true
        } else {
            return false
        }
    })
    if (state) {
        res.send({
            code: "1001",
            msg: "房间号已经存在"
        })
    } else {
        data.push(chartObj)
        file.write(path.join(__dirname, "chart.json"), data)
        res.send({
            code: "1000",
            msg: "房间号创建成功n"
        })
    }
})



// 获取房间号
app.get("/chartList", (req, res) => {

    let data = file.read(path.join(__dirname, "chart.json"))

    res.send({
        data,
        code: "1000",
        msg: "房间号获取成功"
    })

})

let roomList=file.read(path.join(__dirname, "chart.json"))

//socket连接
io.on("connection",(socket)=>{
    socket.on("data",(data)=>{
        console.log(data)
    })

    
    for (let i = 0; i < roomList.length; i++) {

        //监听每一个聊天室的客户端消息
        socket.on(roomList[i].roomId,(datas)=>{
            
            //从聊天文件中读取当前所有的聊天室和聊天室信息
            let room=file.read(path.join(__dirname, "chart.json"))

            //将当前新的聊天信息添加到文件数据中
            let curroom=null
            let newroomList=room.map((item)=>{
                if(item.roomId==roomList[i].roomId){
                    item.chartMsg.push(datas)
                    curroom=item
                }
                return item
            })
          
            //将最新的聊信息写入存储文件
            file.write(path.join(__dirname, "chart.json"),newroomList)

            //向当前聊天室的所有成员广播事件与消息（只为当前聊天室广播）
            socket.broadcast.emit(roomList[i].roomId,curroom.chartMsg)
            //向我自己也广播一次事件
            socket.emit(roomList[i].roomId,curroom.chartMsg)
        })
        //第一次向客户端发送当前聊天室内容
    
        socket.emit(roomList[i].roomId,roomList[i].chartMsg)
        
    }
   
    // socket.disconnect();
})

