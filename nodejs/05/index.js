// let a = async function () {
//     await new Promise((res)=>{
//         setTimeout(()=>{
//             res(3)
//         },1000)
//     })
//     return 2
// }


// async function b() {
//     await new Promise((res)=>{
//         setTimeout(()=>{
//             res(3)
//         },1000)
//     })
//     return 2
// }
// a().then((data)=>{
//     console.log(data)
// })

// let obj={
//     async aa(){

//     }
// }

// class aa{
//     constructor(){

//     }
//     async bb(){

//     }
// }


// let aa=async ()=>{

// }


// let aa=async ()=>{
//    let a= await Promise.resolve(2)
//    let b=await new Promise((res,rej)=>{
//         rej(3)
//    })
// //    throw new Error("不小心出错了")
//    console.log(21)
//     return b
// }

// aa().then((data)=>{

//     console.log(data+"ok")
// }).catch((err)=>{
//     console.log(err)
// })



// let aa = async () => {
//     let a = await Promise.resolve(2)
//     try {
//         var b = await new Promise((res, rej) => {
//             rej(3)
//         })

//     } catch (error) {
//         console.log(error+"内部")
//     }

//     let c = await new Promise((res, rej) => {
//         res(4)
//     })
//     console.log(21)
//     return b
// }

// aa().then((data) => {

//     console.log(data + "ok")
// }).catch((err) => {
//     console.log(err+"外部")
// })



// let aa = async () => {
//     let a = await Promise.resolve(2)

//     var b = await new Promise((res, rej) => {
//         rej(3)
//     }).catch((err)=>{
//         console.log(err+"内部")
//     })


//     let c = await new Promise((res, rej) => {
//         res(4)
//     })
//     console.log(21)
//     return b
// }

// aa().then((data) => {

//     console.log(data + "ok")
// }).catch((err) => {
//     console.log(err + "外部")
// })



// let load=async ()=>{
//     try {
//         // await  Promise.resolve(1)
//         // await Promise.resolve(2)
//         // await Promise.resolve(3)

//         await Promise.all([Promise.resolve(1),Promise.resolve(2),Promise.resolve(3)])
//     } catch (error) {

//     }
// }

// function createAsyncIterable(arr) {

//     arr[Symbol.asyncIterator] = function () {
//         var index = 0
//         let length=arr.length
//         return {
//             next() {
//                 if(index<length){
//                     return new Promise((res,rej)=>{
//                         setTimeout(()=>{
//                             res({value:arr[index++],done:false})
//                         },1000)
//                     })
//                 }else{
//                     return new Promise((res,rej)=>{
//                         setTimeout(()=>{
//                             res({value:undefined,done:true})
//                         },1000)
//                     })
//                 }

//             }
//         }
//     }

//     return arr
// }



// const asyncIterable = createAsyncIterable(['a', 'b']);
// const asyncIterator = asyncIterable[Symbol.asyncIterator]();

// // asyncIterator.next().then((data)=>{
// //     console.log(data)
// // })

// async function a(){
//     for await(const iterator of asyncIterable) {
//         console.log(iterator)
//     }
// }

// a()





function asyncIterator() {
    var obj = this
    var index = 0
    let length = obj.length || obj.size
    // console.log(index,length)
    return {
        next() {
            if (index < length) {
                return new Promise((res, rej) => {
                    [...obj][index++].then((data) => {
                        res({
                            value: data,
                            done: false
                        })
                    }).catch((err) => {
                        rej({
                            value: undefined,
                            done: true
                        })
                    })

                })
            } else {
                return new Promise((res, rej) => {

                    res({
                        value: undefined,
                        done: true
                    })

                })
            }

        }
    }

}


Array.prototype[Symbol.asyncIterator] = asyncIterator
Set.prototype[Symbol.asyncIterator] = asyncIterator




// console.log(set[Symbol.asyncIterator])

// async function a() {
//     var set = new Set([new Promise((res) => {
//         setTimeout(() => {
//             res(1)
//         }, 1000)
//     }), new Promise((res) => {
//         setTimeout(() => {
//             res(2)
//         }, 2000)
//     }), new Promise((res) => {
//         setTimeout(() => {
//             res(3)
//         }, 3000)
//     })])


//     for await (let i of set) {
//         console.log(i)
//     }
// }

// a()


// async function* createAsyncIterable(syncIterable) {
//     for (const elem of [1,2,3]) {
//         console.log(elem)
//       yield elem;
//     }
//     return 1
//   }
//   var a=createAsyncIterable()
// a.next()
// a.next()
// a.next()