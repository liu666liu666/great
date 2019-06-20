let config=require("./config")


let mysql=require("mysql")


// 与mysql的普通链接
// function query(sql, callback) {
//     var connection = mysql.createConnection(config.sql_config);


//     connection.connect(function(err) { console.log(err) });

//     connection.query(sql, function(qerr, rows, fields) {
//         //关闭数据库连接  
//         connection.end(function(err) { console.log(err) });
//         //事件驱动回调  
//         callback(qerr, rows, fields);
//     });
// }



let connection=mysql.createPool(config.sql_config)
const query=(sql)=>{
  return new Promise((resolve,reject)=>{
    connection.getConnection((err,connect)=>{
      connect.query(sql,(sqlerr,rows,fields)=>{
        if(err){
          console.log(err) 
          reject(err)
          return
        }
        resolve(rows)
//释放连接
        connect.release()
      })
    })
  })
}

module.exports=query