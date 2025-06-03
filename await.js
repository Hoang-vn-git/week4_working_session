const fs = require('fs/promises')

var run = async () => {

    // Promise version
    fs.readFile("package.json")
    .then((data) => {
        console.log(data.toString())
    }) 

    // Async await result

    const data = await (fs.readFile("package.json"))
    console.log(data.toString())
}


run()

