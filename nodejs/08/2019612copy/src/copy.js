let fs = require("fs")


function copy(src, target) {
    //判断目标文件夹是否存在，不存在创建，存在先删除，再创建
    try {
        fs.accessSync(target)
        deleteDir(target)
        fs.mkdirSync(target)
    } catch (err) {
        fs.mkdirSync(target)
    }
    //读取当前文件夹下所有的文件，如果是 文件夹进行递归拷贝，如果是文件，直接拷贝
    fs.readdir(src,(err,data)=>{
        if(err) throw err
        data.forEach((item)=>{
            let paths=src+"/"+item
            let targetPaths=target+"/"+item
            if(fs.statSync(paths).isDirectory()){
                copy(paths,targetPaths)
            }else{
                fs.copyFile(paths,targetPaths,(err)=>{
                    if(err) throw err
                })  
            }
        })
    })
}

function deleteDir(target) {
    //读取到当前文件夹下载所有文件
    let filearr = fs.readdirSync(target)
    filearr.forEach((item) => {
        let src = target + "/" + item
        //遍历文件进行文件夹和文件的判断，文件夹递归，文件删除
        if (fs.statSync(src).isDirectory()) {
            deleteDir(src)
        } else {
            fs.unlinkSync(src)
        }
    })
    //删除当前空文件夹
    fs.rmdirSync(target)
}

module.exports=copy
