const http = require("http");
const WebSocketServer = require("websocket").server;

const connections = [];

const httpserver = http.createServer((req, res) => {
    console.log("we have received request");
    res.writeHead(200);
    res.end();
})

const websocket = new WebSocketServer({
    httpServer: httpserver
});

websocket.on("request", request => {
    const connection = request.accept(null, request.origin);

    connections.push(connection);

    connection.on("message", message => {

        connections.forEach(client => {
            if (client != connection) {
                client.sendUTF(message.utf8Data);
            }
        })
            
    })
})

httpserver.listen(8000, () => {
    console.log("Server is listening on port 8000");
});

