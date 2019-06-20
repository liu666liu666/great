//构造函数
function jq(el) {
    this.el = this.init(el)
}
jq.prototype = {
    init(el) {
        if (typeof el == "string") {
            if (/^#/g.test(el)) {
                return document.querySelector(el)
            } else {
                return Array.from(document.querySelectorAll(el))
            }
        } else {
            return el
        }

    },
    click(cb) {

        if (this.el instanceof Array) {
            this.el.forEach((i) => {
                i.addEventListener("click", cb)
            });
        } else {
            this.el.addEventListener("click", cb)
        }
        return this
    },
    html(str) {
        if (str) {
            this.el.innerHTML = str
            return this
        } else {
            return this.el.innerHTML
        }
    },
    text(str) {
        if (str) {
            this.el.innerText = str
            return this
        } else {
            return this.el.innerText
        }
    },
    val(str) {
        if (str) {
            this.el.value = str
            return this
        } else {
            return this.el.value
        }
    },
    attr() {
        if (arguments.length > 1) {
            this.el.setAttribute(arguments[0], arguments[1])
            return this
        } else {
            return this.el.getAttribute(arguments[0])
        }
    },

}

//工厂函数
function $(el) {
    return new jq(el)
}



//工厂函数对象

let origin = {
    parse(str) {
        str = str.slice(1)
        let arr = str.split("&")
        let obj = {}
        arr.forEach((i) => {
            let everyarr = i.split("=")
            obj[everyarr[0]] = everyarr[1]
        })
        return obj
    },
    urlString(obj) {
        let str = str.slice(1)
        let arr = str.split("&")
        if (obj) {
            let str = ""
            Object.entries(obj).forEach((i, index) => {
                if (index == 0) {
                    str += "?" + i[0] + "=" + i[1]
                } else {
                    str += "&" + i[0] + "=" + i[1]
                }
            })
            return str
        }

        return ""
    },
    ajax(option) {
        let {
            type,
            url,
            data
        } = option
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest()
            if (type == "get") {
                if (data) {
                    let dataArr = Object.entries(data)
                    dataArr.forEach((i, index) => {
                        if (index == 0) {
                            url += "?" + i[0] + "=" + i[1]
                        } else {
                            url += "&" + i[0] + "=" + i[1]
                        }
                    })
                }

                xhr.open(type, url)
                xhr.send()
            } else {

                xhr.open(type, url)
                xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
                let str = ""
                if (data) {
                    let dataArr = Object.entries(data)

                    dataArr.forEach((i, index) => {
                        if (index == 0) {
                            str += i[0] + "=" + i[1]
                        } else {
                            str += "&" + i[0] + "=" + i[1]
                        }
                    })
                }

                xhr.send(str)
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.responseText))
                    } else {
                        reject("err")
                    }
                }
            }

        })

    },

    /*
     *arg:cookie名或者key
     *获取cookie
     */
    getCookie(arg) {

        var cookies = document.cookie.split("; ")

        var result = null
        cookies.forEach(function (item) {

            var key = item.slice(0, item.indexOf("="))
            var keyVal = item.slice(item.indexOf("=") + 1)
            if (key == arg) {
                result = keyVal
            }
        })
        return result
    },
    /*
     *key:cookie名或者key
     *keyVal:cookie值
     *path:路径一般为"/
     *day:有效期天数
     *获取cookie
     */
    setCookie(key, keyVal, path, day) {
        var date = new Date()
        date.setDate(date.getDate() + day)
        document.cookie = `${key}=${keyVal};path=${path};expires=${date.toGMTString()}`
    },
    /*
     *key:cookie名或者key
     *获取cookie
     */
    deleteCookie(key) {
        var clearD = new Date()
        clearD.setSeconds(clearD.getSeconds() - 1)
        document.cookie = `${key}=v;path=/;expires=${clearD.toGMTString()}`
    }
}

Object.assign($, origin)