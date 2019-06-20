var event={
    _store:new Set(),
    on(name,cb){
        this._store.add(cb)
    },
    emit(name){
       for(var i of this._store){
           i()
        //    console.log(i)
       }
    },
    remove(cb){
        this._store.delete(cb)
    },
    deleteE(){
        this._store.clear()
    }
}

event.on("up",()=>{
    console.log(111)
})
event.on("up",()=>{
    console.log(222)
})

var a=()=>{
    console.log(333)
}
event.on("up",a)

event.remove(a)

event.deleteE()

event.emit("up")
