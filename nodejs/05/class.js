// let add=Symbol("add")

// class A {
//     constructor(option){
//         Object.assign(this,option)
//         this.fn=function(){

//         }
//     }
//     [add](){

//     }
// }

// function A(option){
//     this.a=option.a
// }

// A.prototype.add=function(){

// }

// var aa=new A({a:1})

// console.log(Object.getOwnPropertyDescriptor(Object.getPrototypeOf(aa),"add"))

// console.log(aa.__proto__.add)



// function A(option){
//     this.a=option.a
// }

// A.prototype.add=function(){

// }

// var aa=new A()
// var bb=new A()
// aa.add=func


// (function(global){
//     let _names=Symbol("names");
//     let A=class {

//         [_names]="niha"
//         add=()=>{

//         }
//         add(){

//         }
//     }

//     global.A=A
// })(global)


// var aa=new A()
// console.log(aa[_names])



// class A{
//     constructor(){
//         this.age=12
//         // this.add=this.add.bind(this)
//     }
//     // add(){
//     //     console.log(this.getage())
//     // }
//     add=()=>{
//         console.log(this.getage())
//     }
//     getage(){
//         return this.age
//     }
// }

// let {add}=new A()
// // let aa=new A()

// add()



// class A{
//     static getfn(){
//         console.log(123)
//     }
//     constructor(){
//         // this.age=12
//         this._age=12
//     }
//     get age(){
//         return this._age
//     }
//     set age(val){
//         this._age=val
//     }

//     * add (){
//         console.log(2)
//         yield  1
//     }
// }

// let aa=new A()

// var i=aa.add()
// console.log(i.next())


// class B extends A{
//     static names="lisi"
//     static a(){
//         console.log(11)
//     }
//     constructor(){
//         // console.log(super===A.constructor)
//         super.a()
//         super()
//     }
// }

// // new B()

// console.log(B.names)


// // B.getfn()


// class A {
//     constructor(option){
//         this.name=option
//     }
// }

// class B extends A{
//     // constructor(option){
//     //     // super(option)
//     // }
// }

// new B(12)


// class A {
//     constructor(option){
//         this.name=option
//     }
//     add(){
    
//     }
// }

// class B extends A{
//     static a(){
//     //     console.log(super==A)
//     }
//     constructor(option){
        
//         var obj=super()
//         obj.name=1
//         console.log(obj.add)
//     }
// }

// var bb=new B(12)

// console.log(bb.__proto__==A)

// console.log(B.a())



class A {
    constructor(option){
        this.name=option
    }
  
}

class B extends A{
  
    constructor(option){
        
       super()
    }
}

var bb=new B(12)

console.log(bb.__proto__==B.prototype)
console.log(B.prototype==new A().__proto__)


function A(){

}
function B(){

}

A.prototype=new B()