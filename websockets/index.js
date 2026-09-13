const http = require("http");
const WebSocketServer = require("websocket").server;

const httpserver = http.createServer((req, res) => {
    console.log("we have received request");
    res.writeHead(200);
    res.end();
});

const websocket = new WebSocketServer({
    httpServer: httpserver
});

websocket.on("request", request => {
    const connection = request.accept(null, request.origin);

    console.log("Client connected");

    connection.on("open", () => {
        console.log("Opened!!!!");
    });

    connection.on("close", () => {
        console.log("Closed!!!!");
    });

    connection.sendUTF("Hello from Server!");

    connection.on("message", message => {
        console.log(`Received message: ${message.utf8Data}`)
    });
});

httpserver.listen(8000, () => {
    console.log("My server is listening on port 8000");
});

