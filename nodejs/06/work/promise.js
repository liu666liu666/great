class Promises {
    constructor(fn) {
        this.fn = fn
        this.sets = new Set()
        this.resolve=this.resolve.bind(this)
        this.reject=this.reject.bind(this)
        setTimeout(()=>{
            this.fn(this.resolve, this.reject)
        })
        this.index=0
    }
    resolve(...rest) {
        // [...this.sets].forEach((item) => {
        //     item.okcb(...rest)
        // })
        let result=rest
        let data=null
        let run=()=>{
            let arr=[...this.sets]
            //then的成功函数没有任何返回值
            if(this.index<arr.length&&!data){
                data=arr[this.index++].okcb(...result)
                run()
                //return 为新的promise，后续then函数接受新的promise的值
            }else if(data instanceof Promises){
                
                let lastthen=[...this.sets].slice(this.index)
                //把后续所有的then中okcb和errcb添加到新的promsie中
                lastthen.forEach((item)=>{
                    data.then(item.okcb,item.errcb)
                })
                //return 值为正常值，后续then中的okcb接受此值
            }else if(this.index<arr.length){
                result=data
                this.index=this.index+1
                //如果return正常值之后，后续没有再return,则data永远取当前这次return的值
                data=arr[this.index].okcb(data)?arr[this.index].okcb(data):result
                this.index=this.index+1
                run()
            }
        }
        run()
    }
    reject(...rest) {
        [...this.sets][0].errcb(...rest)
    }
    then(okcb, errcb) {
        this.sets.add({
            okcb,
            errcb
        })
        return this
    }
    static all(allpromise){
        let result=[],state=true
        let obj={
            sets:new Set(),
            then(okcb, errcb) {
                this.sets.add({
                    okcb,
                    errcb
                })
                return this
            }
        }
        allpromise.forEach((item)=>{
            item.then((data)=>{
                result.push(data)
                if(result.length==allpromise.length && state){
                    [...obj.sets].forEach((item)=>{
                        item.okcb(result)
                    })
                }
            },(err)=>{
                state=false;
                [...obj.sets][0].errcb(err)
            })
        })
        return obj
    }
    static race(allpromise){
        let state=true
        let obj={
            sets:new Set(),
            then(okcb, errcb) {
                this.sets.add({
                    okcb,
                    errcb
                })
                return this
            }
        }
        allpromise.forEach((item)=>{
            item.then((data)=>{
                if(state){
                    [...obj.sets].forEach((item)=>{
                        item.okcb(data)
                    })
                    state=false
                }
            },(err)=>{
                state=false;
                [...obj.sets][0].errcb(err)
            })
        })
        return obj
    }
}





// let a=()=>{
//     return new Promises((res,rej)=>{
//         setTimeout(()=>{
//             res(1)
//         },1000)
//     })
// }
// let b=()=>{
//     return new Promises((res,rej)=>{
//         setTimeout(()=>{
//             res(2)
//         },2000)
//     })
// }

// let c=()=>{
//     return new Promises((res,rej)=>{
//         setTimeout(()=>{
//             res(3)
//         },3000)
//     })
// }


// Promises.race([a(),b(),c()]).then((data)=>{
//     console.log(data)
// },(err)=>{
//     console.log("err:"+err)
// })

// //第一次promise
// new Promises((res, rej) => {
    
//     setTimeout(() => {
//         res(1)
//     }, 2000)
// }).then((data) => {
//     console.log(data)
//     //第二次promise的抛出
//     // return new Promises((res,rej)=>{
//     //     setTimeout(() => {
//     //         res(2)
//     //     }, 2000)
//     // })
//     // return 3
// }, (err) => {
//     console.log("err:"+err)
// }).then((data) => {
//     console.log(data)
// }, (err) => {
//     console.log("err:"+err)
// }).then((data) => {
//     console.log(data)
//     //   return new Promises((res,rej)=>{
//     //     setTimeout(() => {
//     //         res(2)
//     //     }, 2000)
//     // })
// }, (err) => {
//     console.log("err:"+err)
// }).then((data) => {
//     console.log(data)
// }, (err) => {
//     console.log("err:"+err)
// })