// import obj,{firstName,lastName} from "./common/two"
// console.log(firstName,obj)



// import * as obj from "./common/two"
// console.log(obj)




// import {name as names,multiply} from "./common/two"

// var name=2

// console.log(names,multiply)



// import {names,multiply} from "./common/two"

// var name=2

// console.log(names,multiply)




// if(true){
//     console.log(names,multiply)
//     import {names,multiply} from "./common/two"
// }


// var name=2

// import {names,multiply} from "./common/two"
// import {names,multiply} from "./common/two"
// import {names,multiply} from "./common/two"

// import de,* as obj from "./common/two"
// import {name as names,default as age} from "./common/two"

// console.log(age)

// import {foo,add,foo1,name, onedefault} from "./common/two"

// console.log(foo,add,foo1,name,onedefault)


// if(true){
// import("./common/two").then((obj)=>{
//     // console.log(foo)
//     obj.foo()
// })

// }


// function aa(){
//     import("./common/two").then((obj)=>{
//     // console.log(foo)
//     obj.foo()
// })
// }

// aa()

// import {obj} from "./common/two"

// obj.name=2


// var obj=require("./common/two.js")
// console.log(obj)


// import obj from "./common/two"

// console.log(obj)

import("./common/two").then((obj)=>{
    console.log(obj)
})