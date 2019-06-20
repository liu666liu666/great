let xhr=new XMLHttpRequest()
xhr.open("post","/api")
xhr.setRequestHeader("content-type","applcation/www-form-encodeurl")
xhr.send("name=nihao")

xhr.onreadystatechange=function(){
    if(xhr.readyState==4){
        if(xhr.status==200){
            console.log(xhr.responseText)
        }
    }
}
