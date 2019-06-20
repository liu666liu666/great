// const cart = {
//     _wheels: 4,

//     get wheels() {
//       return 10;
//     },

//     set wheels (value) {
//         a(value)
//       if(value<this._wheels){
//           this._wheels=0
//           return 
//       }
//       this._wheels=value
//     },

// wheels:4
//   }
// cart.wheels=3

//   console.log(cart.wheels)


//   function a(value){
//     console.log(value)
//   }


// var cart={
//     wheels:4
// }
//   function f(value){
//       if(value<cart.wheels){
//         cart.wheels=0
//       }else{
//         cart.wheels=value
//       }
//   }


//   f(3)


// 报错
// const foo = 'bar';
// const bar = 'abc';
// const baz = { [foo]:foo };



// var foo={

// }

// foo.name.age

// foo["name"].age


// console.log(Object.is(-0,-0))





// var obj={
//     a:1

// }

// Object.defineProperty(obj,"a",{
//     _value:"2",

//     writable:true,
//     enumerable:true,
//     configurable:true,
//     get value(){
//         console.log(222)
//         return this._value
//     },
//     set value(val){
//         console.log(111)
//         this._value="$"+val
//     }
// })

// obj.a=3
// console.log(obj.a)

// console.log(Object.getOwnPropertyDescriptor(obj,"a"))
// obj.a=3
// delete obj.a

// Object.setPrototypeOf(obj,{a:3})

// console.log(obj.a)
// console.log(obj.a)

// for(var i in obj){
//     console.log(obj[i])
//     console.log(i)
// }



// var obj={
//     name:1
// }

// Object.values(obj).forEach((i)=>{
//     console.log(i)
// })

// var arr=[1,2,3]
// arr.keys()



// var obj={a:1,b:2}
// var obj1={c:3,d:4}
// Object.assign({},obj,obj1)

// var obj={...obj,...obj1}

// console.log(obj)var

// var obj={
//     name:1,
//     __proto__:{
//         age:2
//     }
// }
// var obj1={
//     __proto__:Object.getPrototypeOf(obj),
//     ...obj
// }
// console.log(obj1.age)

// // const clone1 = {
// //     __proto__: Object.getPrototypeOf(obj),
// //     ...obj
// //   };

// // console.log({}=={})

// Object.is([],[])
// var arr=Object.create([1,2,3])
// arr.forEach(el => {
//         console.log(el)
// })


// var arr1=new Array(1,2,3)
// console.log(arr1)

// var obj={}
// const o = Object.setPrototypeOf(obj, null);

// console.log(Object.getPrototypeOf(obj))


// var obj={
//     name:1,
//     age:2
// }

// console.log(Object.fromEntries(Object.entries(obj)))


// var a=Symbol(false)
// var b=Symbol("1")
// console.log(typeof String(a))
// console.log(Boolean(a))
// console.log(Object.is(a,b))


// console.log("111"+a)


// let mySymbol = Symbol();

//  // 第一种写法
//  let a = {};
//  a[mySymbol] = 'Hello!';


//  console.log(a[mySymbol])

// (function(global){
//     var _age=Symbol("_age")
//     var obj={

//         [_age]:3,
//         get age(){
//             return this[_age]
//         },
//         set age(val){
//             this[_age]=val
//         }
//     }
//     global.obj=obj
// })(global)

// console.log(obj._age)

// // obj[Symbol("_age")]=4
// obj.age=4
// console.log(obj.age)


// function a(){
//     console.log(11)
// }

// var attr=Symbol("")

// function a(type){
//     switch (type){
//         case attr:{
//             console.log(111)
//         }
//     }
// }

// a(attr)



// var a=Symbol("aa")


// var Symbol.for("aa")=`1`
// console.log(Symbol.for("aa")==a)


// function repeat(arr){
//     return [...new Set(arr)]
// }

// console.log(repeat([1,2,3,4,3,2]))


// var a=new Set([1,2,3,4,NaN,[1,2]])
// // a.add([1,2])

// console.log(Array.from(a))




// var event={
//     _store:new Set(),
//     on(name,cb){
//         this._store.add(cb)
//     },
//     emit(name){
//        for(var i of this._store){
//            i()
//         //    console.log(i)
//        }
//     },
//     remove(cb){
//         this._store.delete(cb)
//     },
//     deleteE(){
//         this._store.clear()
//     }
// }

// event.on("up",()=>{
//     console.log(111)
// })
// event.on("up",()=>{
//     console.log(222)
// })

// var a=()=>{
//     console.log(333)
// }
// event.on("up",a)

// event.remove(a)

// event.deleteE()



// event.emit("up")


// var a=new Set([3,2,3,4])
// console.log([...a][0])

// console.log(new Array instanceof Object)

// console.log(Object.keys([1,2,3]))
// console.log(a instanceof Object)
// console.log(Object.values(a))

// for (const iterator of a.entries()) {
//         console.log(iterator)
// }
// console.log(a.keys()[0])
// console.log(a.keys().forEach(element => {

// }))


// var a={a:1}
// var b={a:1}
// // var aa=new WeakSet(a)

// "[object Object]"
// var obj={
//     [a]:1,
//     [b]:2
// }



// console.log(obj[a])


// var a={a:1}
// var b={a:1}
// var aa=new WeakSet(a)

// var m=new Map()
// m.set(a, 'content')
// m.set(b, 'content1')
// console.log(m.get(a) )//
// console.log(aa)

// var a={name:1}
// var aa=new Map([{a:a}])

// console.log(aa)



// var event = {
//     _store: new Set(),
//     on(name, cb) {
//         this._store.add(cb)
//     },
//     emit(name) {
//         for (var i of this._store) {
//             i()
//             //    console.log(i)
//         }
//     },
//     remove(cb) {
//         this._store.delete(cb)
//     },
//     deleteE() {
//         this._store.clear()
//     }
// }

// event.on("up", () => {
//     console.log(111)
// })
// event.on("up", () => {
//     console.log(222)
// })

// // event.emit("up")
// event.emit("down")




// var handler = {
//     get (target, key) {
//       if (key[0] === '_') {
//         return undefined;
//       }
//       return target[key];
//     }
//   };
//   var target = { _prop: 'foo', prop: 'foo' };
//   var proxy = new Proxy(target, handler);

//   console.log(proxy._prop)


// var arr = [
//     [1, 2],
//     [3, 4]
// ]

// function one() {
//     var result = []

//     function fn(arr) {

//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] instanceof Array) {
//                 fn(arr[i])
//             } else {
//                 result.push(arr[i])
//             }
//         }

//     }
//     return result
// }



// console.log(one(arr))



// var arr2=[
//     [1, 2],
//     [3, 4]
// ]


// var arr3=new Proxy(arr2,{
//     get(target,attr){
//         // console.log(target,attr)
//         return [1,2,3]
//     }
// })
// // var a=arr3
// console.log(arr3)



// const target = new Date('2015-01-01');
// const handler = {
//   get(target, prop) {
//       if(target[prop] instanceof Function){
//         return target[prop].bind(target)
//       }
//     return target[prop]
//   }
// };
// const proxy = new Proxy(target, handler);

// console.log(proxy.getDate()) // 1


// var obj={
//     name:1
// }

// console.log(Object.has(obj,"name"))

// var target={
//     name:0
// }
// var proxy=new Proxy(target, {
//     set: function(target, name, value, receiver) {
//         target[name]=value
//       var success = Reflect.set(target, name, value, receiver);
//     //   if (success) {
//     //     console.log('property ' + name + ' on ' + target + ' set to ' + value);
//     //   }
//     //   return success;

        
//     }
//   });

//   proxy.name=1
//   console.log(proxy.name)

//   console.log(target.name)



//   var obj={
//       name:1
//   }

//   Reflect.set(obj,"name","2")
//   console.log(Reflect.get(obj,"name"))


// var obj={name:1}
// Object.freeze(obj)

// Reflect.preventExtensions(obj)
// console.log(Reflect.isExtensible(obj))