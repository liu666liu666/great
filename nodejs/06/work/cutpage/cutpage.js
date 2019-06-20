class cutPage {
    constructor(option) {
        Object.assign(this, option, {
            pageLe: option.pageLength[0],
            currentIndex: 0
        })
    }
    init() {
        //样式操作
        this.styleHandle()
        //基础操作
        this.createDom()
        this.getElement()
        this.eventLisen()
        //页码操作
        this.pageHandle()

        let pageData = this.data.slice(0, 1 * this.pageLe)
        this.cb2(pageData)
        this.cb1(this.pageLe)
    }
    styleHandle() {
        let str = `<style>
        *{
            margin:0;
            padding:0
        }
        .pageContent {
            display: flex;
            align-content: center;
            justify-content: center;
        }

        .pageContent div {
            overflow: hidden;
        }
        .pageContent b {
            float: left;
        }
        .pageContent p {
            float: left;
        }
        .pageContent p span {
            display: inline-block;
            width: 20px;
            height: 20px;
            border: 1px solid red;
        }
    </style>`
        document.head.innerHTML += str
    }
    createDom() {
        let html = `
    <main class="pageContent">
        <b>总共${this.data.length}条</b>
        <select name="" id="" value=>`
        for (let i = 0; i < this.pageLength.length; i++) {
            html += `<option value="${this.pageLength[i]}">${this.pageLength[i]}条/页</option>`
        }

        html += ` </select>
        <div class="pages">
            <b>上一页</b><p></p><b>下一页</b>
        </div>
    </main>`

        this.el.innerHTML = html
    }
    getElement() {
        //基础节点的获取
        this.$select = this.el.querySelector("select")
        this.$p = this.el.querySelector(".pages p")
        this.$b = this.el.querySelectorAll(".pages b")
    }
    eventLisen() {
        
        //基础节点的事件添加
        this.$select.onchange =  (e)=> {
            
            this.pageLe = parseInt(e.target.value)
            this.currentIndex=0
            this.pageHandle()
            let pageData = this.data.slice((this.currentIndex) * this.pageLe, (this.currentIndex+1) * this.pageLe)
            this.cb2(pageData)
            this.cb1(e.target.value)
        }
        this.$b[0].onclick =  ()=> {
            this.currentIndex--
            if (this.currentIndex < 0) {
                this.currentIndex = 0
            }
            let pageData = this.data.slice(this.currentIndex * this.pageLe, (this.currentIndex + 1) * this.pageLe)
            this.cb2(pageData)
            this.pageHandle()
        }
        this.$b[1].onclick =  ()=> {
            this.currentIndex++
            let page = Math.ceil(this.data.length / this.pageLe)
            if (this.currentIndex >= page) {
                this.currentIndex = page - 1
            }
            let pageData = this.data.slice(this.currentIndex * this.pageLe, (this.currentIndex + 1) * this.pageLe)
            this.cb2(pageData)
            this.pageHandle()
        }
    }


    pageHandle() {
        //根据页面数据长度和总数据进行页码的计算，和添加节点

        let pages = Math.ceil(this.data.length / this.pageLe)
        //每次点击后进行页码的渲染
        let renders = (start, end) => {
            let str = ''
            for (let i = start; i <= end; i++) {
                //如果是当前页，则渲染红色
                if ((this.currentIndex + 1) == i) {
                    str += `<span style="background:red">${i}</span>`
                } else {
                    str += `<span>${i}</span>`
                }
            }
            return str
        }

        //小于3的情况
        if (this.currentIndex <= 2) {
            if(pages<5){
                this.$p.innerHTML = renders(1, pages)
                this.$p.className = ""
            }else{
                this.$p.innerHTML = renders(1, 5)
                this.$p.className = "pA"
            }
            
            //最后5页的情况
        } else if (this.currentIndex >= pages - 3) {
            this.$p.innerHTML = renders(pages - 4, pages)
            this.$p.className = "pB"
            //中间页码的渲染情况
        } else {

            this.$p.innerHTML = renders(this.currentIndex - 1, this.currentIndex + 3)
            this.$p.className = "pA pB"
        }

        //页码的事件监听
     

        var $span = this.el.querySelectorAll(".pages span")

        for (let i = 0; i < $span.length; i++) {

            $span[i].onclick =  (e)=> {

                let i = e.target.innerText - 1;

                this.currentIndex = i

                var pageData = this.data.slice(i * this.pageLe, (i + 1) * this.pageLe)

                this.cb2(pageData)

                this.pageHandle()
            }

        }
    }
}