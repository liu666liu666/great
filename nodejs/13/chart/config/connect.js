let mysql=require("mysql")

// let query=(sql,cb)=>{
//     let connect=mysql.createConnection({
//         host:"localhost",
//         user:"root",
//         password:"1q2w3e",
//         port:3306,
//         database:"chart"
//     })

//     connect.query(sql,(err,rows)=>{
//         console.log(rows)
//         connect.end()

//         cb(err,rows)
//     })
// }

let connects=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"1q2w3e",
    port:3306,
    database:"chart"
})
let query=(sql)=>{
    return new Promise((res,rej)=>{
        connects.getConnection((err,connect)=>{
            connect.query(sql,(err,rows)=>{
                // console.log(rows)
                connect.release()
                if(err){
                    rej(err)
                }else{
                    res(rows)
                }
            })
        })
    })
   
    
}


module.exports=query