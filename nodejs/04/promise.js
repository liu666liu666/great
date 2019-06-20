function Promises(){

}

Object.setPrototypeOf(Promises,{
    then(){

    },
    catch(){

    },
    finally(){

    }
})

Object.assign(Promise,{
    all(){

    },
    race(){

    }
})


new Promise((res,rej)=>{
    setTimeout(()=>{
        res()
    },2000)
   
}).then(()=>{

})


Promises.all([]).then(()=>{
    
})

