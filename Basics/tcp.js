const net = require("net")

const server = net.createServer(socket => {
    socket.write("Hello.")
    socket.on("data", data => {
        console.log("Client says:",data.toString())
    })
})

server.listen(8080,() => {
    console.log("TCP Server running on port 8080")
})