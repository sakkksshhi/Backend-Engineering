const WebSocketClient = require("websocket").client;

const client = new WebSocketClient();

client.on("connect", connection => {
    console.log("Connected to server!");

    connection.sendUTF("Hello from client!");

    connection.on("message", message => {
        console.log(`Received message from server: ${message.utf8Data}`);
    });
});

client.on("connectFailed", error => {
    console.log("Connection failed:", error);
});

client.connect("ws://localhost:8000/");