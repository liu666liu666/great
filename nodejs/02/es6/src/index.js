// var str="sdf'd"asfd"s'a"


// var str="<p style='backgroundImage:url(\"a/b/png\")'></p>"
// var str=`<p style=\`backgroundImage:url("a/b/png")'></p>`


// function tag(a,b,c){
//     console.log(arguments)
// }

// let a = 5;
// let b = 10;

// tag`Hello ${ a + b } world ${ a * b }`;

// // 等同于
// tag(['Hello ', ' world ', ''], 15, 50);


// function SaferHTML(templateData) {
//     //[<p>,has sent you a message.</p>] , '<script> alert("abc") </script>'

//     let s = templateData[0];
//     for (let i = 1; i < arguments.length; i++) {
//       let arg = String(arguments[i]);

//       // Escape special characters in the substitution.
//       s += arg.replace(/&/g, "&amp;")
//               .replace(/</g, "&lt;")
//               .replace(/>/g, "&gt;");

//       // Don't escape special characters in the template.
//       s += templateData[i];
//     }
//     return s;
//   }

//   let sender = '<script> alert("abc") </script>'; // 恶意代码
// let message = SaferHTML`<p>${sender} has sent you a message.</p>`;

// console.log(message)


// var str="1sfsfsfa"

// console.log(str.indexOf("a"))
// console.log(str.includes("a"))



// var str="   sfdsfs   "
// console.log(str.trim().length)
// console.log(str.trimStart().length)


// console.log(Number.isSafeInteger(9007199254740992+2))

// console.log(9007199254740992+2)

// console.log(Math.ceil(true))

// console.log(2**4)
// console.log(Math.pow(2,4))

// function foo([]) {
//     console.log(x, y);
//   }
//   foo({})  

// //   {x, y = 5}=undefined



// var x = 1;

// function f(x, y = x) {
//   console.log(y);
// }

// f(2) 
// {
//     { let x=2
//         let y=x
//         {
//             y
//         }
//     }
// }


// var x = 1;

// function f(x, y = (function(){return x})()) {
//     var  y=1
//   console.log(y);
// }

// f(2)






// {
//     {
//         let x=2
//              let y=(function(){return x})()
//            
// //         
y = 1
//              console.log(y)
//         
//     }
// }



// var x = 1;
// function foo(x, y = function() { x = 2; }) {
//   var x = 3;
//   y();
//   console.log(x);
// }

// foo() // 3


// {
//     {
//         let x=2
//         // 
//             let  x=3
//             var  x=3
//             console.log(x)
//         // }
//     }
// }



// var x = 1;
// function foo(x, y = function() { x = 2; }) {
//   var x = 3;
//   y();
//   console.log(x);
// }

// foo() // 3
// x // 1


// var x = 1;
// function foo(x, y = function() { x = 2; }) {

//   y();
//   x = 3;
//   console.log(x);
// }

// foo() // 2
// console.log(x)


// function add(...values) {
//     let sum = 0;
//     console.log(values)
//     for (var val of values) {
//       sum += val;
//     }

//     return sum;
//   }

//   add(2, 5, 3) // 10


// var [a,...b]=[1,2,3,4]  //解构使用
// function fn(...a){      //rest参数
//     var b=[...a]   //扩展运算符
// }
// fn(1,2,3,4)


// var arr1=[1,2,3,4]
// var arr2=[5,6,7]
// // arr1.concat(arr2)
// arr1.push(...arr2)

// var arr=[]
// function fn(...a){
//     arr.push(...a)
// }

// function fn(){
//     arr.concat(Array.prototype.slice.apply(arguments,0))
// }

// function fn(...a){
//     arr=[...arr,...a,1,2]
// }
// fn(1,2,3,4)


// var a=new Set([1,2,3])

// var arr=[...a]
// console.log(arr)


// var f = function () {};
// var b=f

// console.log(b.name)

// var f = v => v+1;
// var f= v=>{ v}
// var f=(v)=>v



// var f = v =>{
//     v+1 
//     v++;
// }
// console.log(f(1))


// var f=()=>({name:1})
// var f=()=>{
//     return {name:1}
// }

// console.log(f())


// 箭头函数写法
// var arr=[1,2,3].filter(x => x>2);
// var arr=[1,2,3].filter(function (x){
//     return x>2
// });

// console.log(arr)

// var a=1


// var f=()=>{
//     console.log(this)
// }

// f()
// console.log(this)


// function f(){
//     console.log(this)
//     return ()=>{
//         console.log(this)
//     }
// }


// var obj={
//     f:f
// }

// var h=obj.f()

// // console.log(obj.f())
// h()



// function f(){

//     this.c=ob.c()
// }

// var ob={
//     name:1,
//     c:function(){
//         console.log(this)
//         return ()=>{
//             console.log(this.name)
//         }

//     }
// }



// var obj=new f()

// obj.c()


// var f=()=>{

// }

// new f()


// function a(){
//     var a=1
//     function b(){
//         console.log(a)
//         function c(){

//         }
//         c()
//     }

//     b()
//     console.log(a)
//     return 
// }


// function a(){
//     var b=1

//     return function(){
//         return b
//     }

// }

// var b=a()()



// function factorial(n, total) {
//     if (n === 1) return total;
//     return factorial(n - 1, n * total);
// }

// factorial(5, 1) // 120


// 5,1  ---- 4 ,5

//4,5   ---3,20

//3,20   ---2, 60
             ,120


1,1,2,3,5,8,13,21,34

// function f(n){
//     if(n<=2){
//         return 1
//     }
//     return f(n-1)+f(n-2)

// }

// function f (n , ac1 = 1 , ac2 = 1) {
//     if( n <= 2 ) {return ac2};
  
//     return f (n - 1, ac2, ac1 + ac2);
//   }
  

// console.log(f(100))

// 4, 1,2
// 3,2,3
// 2,3,5
// 1,5

// console.log(11)


// function Fibonacci (n) {
//     if ( n <= 1 ) {return 1};
  
//     return Fibonacci(n - 1) + Fibonacci(n - 2);
//   }

//   function Fibonacci2 (n , ac1 = 1 , ac2 = 1) {
//     if( n <= 1 ) {return ac2};
  
//     return Fibonacci2 (n - 1, ac2, ac1 + ac2);
//   }
  
//   console.log(Fibonacci(5))
//(1+1+1)+(1+1)

// (1+1+1)+1+1)+(1+1+1)



// function a(){
//     Array.prototype.slice.apply(arguments).map((i)=>{
//         return "$"+i
//     })
//     arguments.length=2
//    var arr=Array.from(arguments,(i)=>{
//         return "$"+i
//     })

//     console.log(arr)
// }
// a(1,2,3,4)


// var arr=Array.of(1,2)
// var arr=new Array(1,2)
// console.log(arr)



// var arr=[1,2,3,4,5]

// for (const item of arr.values()) {
//     console.log(item)
// }




// var obj={
//     name:1
// }
// for (const item of Object.keys(obj)) {
//         console.log(item)
// }

// for (const item of arr) {
//     console.log(item)
// }

// for (const item of arr.keys()) {
    
// }


// console.log(arr.keys().map((i)=>{
//     console.log(i)

// }))

// console.log(arr.keys()[0])


// console.log(arr.join())
// console.log(arr.length)
// // arr.forEach((item)=>{
// //     console.log(item)
// //     console.log(7)
// // })  

// var arr1=arr.map(()=>{
//     console.log(1)

// })

// console.log(arr1.length)


var arr=[ , ,]
// console.log(...arr)

for (const item of arr) {
    console.log(1)
}