let fs = require("fs")
let path = require("path")
let handle = {
    getData(paths) {
        let localPath = path.join(__dirname, "../mock", paths)
        return JSON.parse(fs.readFileSync(localPath, "utf-8"))
    },
    setData(paths, data) {
        let localPath = path.join(__dirname, "../mock", paths)
        return fs.writeFileSync(localPath, JSON.stringify(data), "utf-8")
    }
}
module.exports = handle