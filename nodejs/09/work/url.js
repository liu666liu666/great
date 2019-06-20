let url=require("url")
let querystring=require("querystring")

// let urls=new url.URL("/name/a?age=1#fdsfsaf","http://www.baidu.com:3000/")

// console.log(urls)

// for (const iterator of urls.searchParams) {
//     console.log(iterator)
// }



let obj=url.parse("http://localhost:3000/path?name=你好&age=2#12345")  

console.log(querystring.parse(obj.query))

// let str=querystring.escape(obj.query)
// console.log(str)
// console.log(querystring.parse(querystring.unescape(str)) )
// console.log()