try {
    setTimeout(function my_app() {
        throw new Error('Catch me');
    })
} catch (e) {
    // never called
    console.log(e)
}

process.on('uncaughtException', (err) => {

    console.log(err)
})

setTimeout(()=>{
    console.log(2222)
},1000)
