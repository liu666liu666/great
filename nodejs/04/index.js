let p1 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(1)
        }, 2000)
    })
}
let p2 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(2)
        }, 5000)
    })
}
let p3 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            rej(3)
        }, 1000)
    })
}


// Promise.all([p1(),p2(),p3()]).then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })

// Promise.race([p1(),p2(),p3()]).then((data)=>{
//     console.log("then:")
//     console.log(data)
// }).catch((err)=>{
//     console.log("err:")
//     console.log(err)
// })


// console.log("finished")

// new Promise((res,rej)=>{
//     res(1)
// })

// Promise.resolve(1).then((data)=>{
//     console.log(data)
// })\\\

// let a=()=>{
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log(1)
//             res()
//         })
//     })

// }

// async function aa(){
//    await a()
// }


// aa()

// console.log("2")


var arr = [1, 2, 3]
// var obj=arr[Symbol.iterator]()
// console.log(obj.next())
// console.log(obj.next())
// console.log(obj.next())
// console.log(obj.next())
// console.log(obj.next())


// var forOf=(obj,cb)=>{
//     if(Reflect.has(obj,Symbol.iterator)){
//         console.log(11)
//         var iter=obj[Symbol.iterator]()
//         var arrlength=obj.length||obj.size
//         console.log(arrlength)
//         var index=0
//         function every(){
//             if(index<arrlength){
//                 cb({value:[...obj][index++],done:false})
//                 every()
//             }

//         }
//         every()
//     }
// }
// forOf(set,(data)=>{
//     console.log(data)
// })


// let forOf=function(cb){
//     let obj=this
//         console.log(this)
//     if(Reflect.has(obj,Symbol.iterator)){
//         console.log(11)
//         var iter=obj[Symbol.iterator]()
//         var arrlength=obj.length||obj.size
//         console.log(arrlength)
//         var index=0
//         function every(){
//             if(index<arrlength){
//                 // cb({value:[...obj][index++],done:false})
//                 cb([...obj][index++])
//                 every()
//             }

//         }
//         every()
//     }
// }

// Object.setPrototypeOf(Array,{...Object.getPrototypeOf(Array),...{forOf}})
// Object.setPrototypeOf(Set,{...Object.getPrototypeOf(Set),...{forOf}})

// Set.prototype.forOf=forOf
// Array.prototype.forOf=forOf

// let set=new Set([1,2,3,4,5])
// // console.log(Object.getPrototypeOf(Set))
// // console.log(set.__proto__)

// set.forOf((item)=>{
//     console.log(item)
// })

// let arr1=[1,2,3]
// arr1.forOf((item)=>{
//     console.log(item)
// })





// var obj={
//     a:1,
//     b:2,
//     [Symbol.iterator](){
//         let index=0
//         let attrArr=Object.getOwnPropertyNames(this)
//         let length=attrArr.length
//         // console.log(length)
//         return {
//             next(){
//                 if(index<length){
//                     return {value:attrArr[index++],done:false}
//                 }else{
//                     return {value:undefined,done:true}
//                 }

//             }
//         }
//     }
// }

// let iter=obj[Symbol.iterator]()

// function forOf(cb){
//     let obj=this
//     if(Object.prototype.toString.call(obj)=="[object Object]"){
//         obj[Symbol.iterator]=()=>{
//             let index=0
//             let attrArr=Object.getOwnPropertyNames(this)
//             let length=attrArr.length
//             // console.log(length)
//             return {
//                 next(){
//                     if(index<length){
//                         return {value:[attrArr[index],obj[attrArr[index++]]],done:false}
//                     }else{
//                         return {value:undefined,done:true}
//                     }

//                 }
//             }
//         }
//     }
//     for(let i of obj){
//         cb(i)
//     }
// }


// Object.prototype.forOf=forOf
// Array.prototype.forOf=forOf
// Set.prototype.forOf=forOf
// Map.prototype.forOf=forOf

// let arr1=[1,2,3,4]
// arr1.forOf((i)=>{
//     console.log(i)
// })

// let obj1={a:1,b:2,c:3}
// obj1.forOf((i)=>{
//     console.log(i)
// })


// let obj1=new Set([1,2,3])
// obj1.forOf((i)=>{
//     console.log(i)
// })


// let obj1=new Map([["a",1],["b",2]])
// obj1.forOf((i)=>{
//     console.log(i)
// })

//////////////////////////////////////////////////////////////////////////////

// function forOfG(cb){
//     let  obj=this
//     let don=false
//     function run(){
//         let {value,done}=obj.next()
//         don=done
//         if(!don){
//             cb(value)
//             run()
//         }

//     }
//     run()
// }

// function* aa(){
//     yield 1
//     yield 2
//     yield 3
// }

// aa.prototype.forOfG=forOfG

// aa().forOfG((item)=>{
//     console.log(item)
// })


///////////////////////////////////////////////

// var obj={
//     a:1,
//     b:2,
//     [Symbol.iterator](){
//         let index=0
//         let attrArr=Object.getOwnPropertyNames(this)
//         let length=attrArr.length
//         // console.log(length)
//         return {
//             next(){
//                 if(index<length){
//                     return {value:attrArr[index++],done:false}
//                 }else{
//                     return {value:undefined,done:true}
//                 }

//             }
//         }
//     }
// }

// var iter=obj[Symbol.iterator]()

// iter.next()


// var obj={

//     [Symbol.iterator]:function* (){
//         yield 1,
//         yield 2,
//         yield 3
//     }
// }

// var iter=obj[Symbol.iterator]()



// var arr=[1,2,3]
// console.log(arr.entries())

// var set=new Set()
// console.log(set.entries())






// function* genFuncWithReturn() {
//     [1,2,3].forEach((item)=>{
//         yield item;
//     })

//     yield 'b';
//     return 'The result';
//   }

//   let obj=genFuncWithReturn()
//   obj.next()



// ////////////////////////

// function* a(){
//     var iter=yield
//     for(var i=0;i<100;i++){
//      let iter=yield new Promise((res)=>{
//             setTimeout(()=>{
//                 console.log(i)
//                 res()

//             },1000)
//         }) 
//         iter.next()
//     }


// }

// var iter=a()

// iter.next(iter)
// iter.next(iter)






// var readFile = require('fs-readfile-promise');

// readFile("./file/file1.txt")
// .then(function (data) {
//   console.log(data.toString());
// })
// .then(function () {
//   return readFile("./file/file2.txt");
// })
// .then(function (data) {
//   console.log(data.toString());
// })
// .catch(function (err) {
//   console.log(err);
// });

var co = require('co');


function* a() {

    for (var i = 0; i < 100; i++) {
        yield new Promise((res) => {
            setTimeout(() => {
                console.log(i)
                res()

            }, 1000)
        })

    }
}


co(a).then(() => {
    console.log("finish")
})