let config={
    host:"127.0.0.1",
    user:"root",
    password:"1q2w3e",
    port:3306,
    database:"testexam"
}


let mysql=require("mysql")

let connects=mysql.createPool(config)

module.exports=function(sql){
    return new Promise((res,rej)=>{
        connects.getConnection((err,connect)=>{
            connect.query(sql,(err,rows,flieds)=>{
                if(err){
                    rej(err)
                }else{
                    res(rows)
                }
                connect.release()
            })
        })
    })
}