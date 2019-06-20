// (function(global){
//     //私有变量的定义
//     let store=Symbol("store")
//     let obj={
//         //键值对存储事件名和事件回调函数集合
//         [store]:new Map(),
//         //监听函数
//         on(type,cb){
//             //对某个事件第一次监听，创建一个仓库
//             if(!this[store].has(type)){
//                 let cbStore=new Set()
//                 cbStore.add(cb)
//                 this[store].set(type,cbStore)
//             }else{
//                 //不是一次操纵，先取set仓库,再添加当前cb
//                 let cbStore=this[store].get(type).add(cb)
//                 this[store].set(type,cbStore)
//             }
            
//         },
//         //发布事件函数
//         emit(type,...rest){
//             //从仓库中去除当前事件的所有回调函数进行执行
//             let cbStore=this[store].get(type)||new Set()
//             for(let i of cbStore){
//                 i(...rest)
//             }
//         },
//         remove(type){
//             this[store].delete(type)
//         }
//     }

//     global.obj=obj
// })(global)



//  //私有变量的定义
//  let store=Symbol("store")
//  let obj={
//      //键值对存储事件名和事件回调函数集合
//      [store]:new Map(),
//      //监听函数
//      on(type,cb){
//          //对某个事件第一次监听，创建一个仓库
//          if(!this[store].has(type)){
//              let cbStore=new Set()
//              cbStore.add(cb)
//              this[store].set(type,cbStore)
//          }else{
//              //不是一次操纵，先取set仓库,再添加当前cb
//              let cbStore=this[store].get(type).add(cb)
//              this[store].set(type,cbStore)
//          }
         
//      },
//      //发布事件函数
//      emit(type,...rest){
//          //从仓库中去除当前事件的所有回调函数进行执行
//          let cbStore=this[store].get(type)||new Set()
//          for(let i of cbStore){
//              i(...rest)
//          }
//      },
//      remove(type){
//          this[store].delete(type)
//      }
//  }



// export default obj




export function add(){
    console.log("one模块add")
   
}

export var name=1

export function foo(){
    console.log("one模块foo")
}

export default 12