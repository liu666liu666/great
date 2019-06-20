// "use strict"

// let name="zhagnsan"

// var aa=()=>{
//     console.log(name)
// }
// aa()




//
// {
//     // var name=1
//     let name=1
// }

// console.log(name)


// for (var index = 0; index < 10; index++) {
//     (function (index) {
//         setTimeout(() => {
//             console.log(index)
//         });
//     })(index)
// }

// var index=0
// for (let index = 0; index < 10; index++) {
//      let index=12
//         setTimeout(() => {
//             console.log(index)
//         });
// }
// {
//     var index=0
//     {
//         let index=0

//         {
//             let index=12
//         }
//     }
// }


// var index=0
// for (const index = 0; index < 10; index++) {
//      let index=12
//         setTimeout(() => {
//             console.log(index)
//         });
// }


// a=1
// console.log(a)
// var a


// if(true){
//     var a
// }

// let a
//     a=1
//     console.log(a)


// var x = x;

// let x=x;



// function func(arg) {
//     var arg
//     {
//         let arg;
//     }

//   }
//   func() // 报错


// function f() { console.log('I am outside!'); }

// (function () {
//     let f
//   if (false) {
//     // 重复声明一次函数f
//     // function f() { console.log('I am inside!'); }
//     f=function(){

//     }
//   }

//   f();
// }());


// const a=1
// a=2


// const b={name:1}
// b.name=2
// b.age=3
// b={name:1}



// const a = [];
// a.push('Hello'); // 可执行
// a.length = 0;    // 可执行



// const foo = Object.freeze({});

// // 常规模式时，下面一行不起作用；
// // 严格模式时，该行会报错
// foo.prop = 123;


// var arr=[1,2,3]

// var a=arr[0]
// var b=arr[1]
// var c=arr[2]

// var [,b,c]=[1,2,3]
// console.log(a,b,c)


// var [a,...c]=[1,2,3]
// console.log(a,c)

// var a=function(){
//     var [a,b]=arguments
// }
// a(1,2)
// console.log(a)

// var [a,b]=new Set([1,2])
// console.log(a,b)

// var arr=new Set([1,2,2])
// for(var i of arr){
//     console.log(i)
// }

// function re(arr){
//     return [...new Set(arr)]
// }

// console.log(re([1,2,3,4,4,3,2]))


// let [x = 1] = [null];
// console.log(x)

// console.log(null==undefined)
// console.log(null===undefined)

// function f() {
//     console.log('aaa');
//     return 2
// }

// let [x = f()] = [];
// console.log(x)

// let [x = 1, y = x] = [];     // x=1; y=1
// let [x = 1, y = x] = [2];    // x=2; y=2
// let [x = 1, y = x] = [1, 2]; // x=1; y=2
// let [x = y, y = 1] = [];     // ReferenceError: y is not defined

// const { log } = {log:function(){}};
// log('hello') // hello


// var obj={
//     a(){

//     },
//     b(){

//     }

// }

// obj.a()

// let {a,b,c,d,c}=obj
// a()


// let obj={
//     a:1,
//     b:function(){
//         console.log(this)
//     }
// }

// let a=3

// let {a,b}=obj

// b()

// console.log(a,b,c)


// var obj={
//     obj:{
//         name:1,
//         obj:{
//             age:3
//         }
//     }
// }

// let {
//     obj:{
//         age:age,
//         obj:{
//             age:ages
//         }
//     }
// }=obj

// console.log(age)


// let obj = {};
// let arr = [];

// ({ foo: obj.prop, bar: arr[0] } = { foo: 123, bar: true });

// let a,b;
// ({a,b}={a:1,b:2})

// function a(){

// }
// a.prototype={
//     age:1
// }

// var obj=new a()
// // obj.__proto__.age

// let {age}=obj
// console.log(age)


// function a(){

// }
// let {b}=a


// function move({x = 0, y = 0}={}) {
//     return [x, y];
//   }


//   move({}); // [0, 0]
//   move(); // [0, 0]

//   ({x = 0, y = 0}=undefined)


// function a(a,b){
//     a=a||1
//     a=a?a:1

// }

// a(1)

function a(a=1, b=1) {
  
}

a(1,2)

function a({}) {
  
}

a({})

function a([]) {
  
}

a([])

var [a,b]=[1,2]