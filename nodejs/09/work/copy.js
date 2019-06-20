let fs = require("fs")
let path = require("path")


function copy(src, target) {

    try {
        fs.accessSync(target)
        deleteDir(target)
        fs.mkdirSync(target)
    } catch (error) {
        fs.mkdirSync(target)
    }

    fs.readdir(src, (err, data) => {
        // console.log(data)
        data.forEach(i => {
            let pathsrc = path.join(src, i)
            let pathtarget = path.join(target, i)

            if (fs.statSync(pathsrc).isFile()) {
                //    fs.copyFileSync(pathsrc,pathtarget)
                let data = fs.readFileSync(pathsrc, "utf-8")
                if (path.extname(pathsrc) == ".css") {
                    let reg = /background:/g
                    let reg2 = /\s+/g
                    data = data.replace(reg, "color:").replace(reg2, "")
                    fs.writeFileSync(pathtarget, data, "utf-8")
                }else if(path.extname(pathsrc) == ".js"){
                    let reg=/(\S+)[\r\n]/g
                    let reg2=/[^\{;,]$/
                    let reg3 = /([\{;,])\s+/g
                    let reg4 = /(;)\}/g
                    data=data.replace(reg,(r1,r2)=>{
                        // console.log(r2)
                        if(reg2.test(r2)){
                            r2=r2+";"
                        }
                        return r2
                    }).replace(reg3,(r1,r2)=>{
                        return r2
                    }).replace(reg4,(r1,r2)=>{
                        return "}"
                    })
                    console.log(data)
                    fs.writeFileSync(pathtarget,data,"utf-8")
                }

            } else {
                copy(pathsrc, pathtarget)
            }
        });
    })
}

function deleteDir(target) {
    let data = fs.readdirSync(target)
    data.forEach(i => {
        let src = path.join(target, i)
        if (fs.statSync(src).isFile()) {
            fs.unlinkSync(src)
        } else {
            deleteDir(src)
        }
    });
    fs.rmdirSync(target)
}

copy(path.join(__dirname, "./assets"), path.join(__dirname, "./dist"))


