let {
    observe,
    observable
} = require("./tool")

require("./one")

var data=observable({
    name:1
})

data.name=2
