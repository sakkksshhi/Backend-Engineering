const WebSocketClient = require('websocket').client;
const readline = require("readline");

const client = new WebSocketClient();
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

client.on('connect', connection => {
    console.log('Connected to server!');

    function sendMessage() {
    rl.question("Enter message: ", answer => {
        connection.sendUTF(answer);
        sendMessage(); 
    });
    }
    sendMessage();

    connection.on('message', message => {
        console.log(`Received message from server: ${message.utf8Data}`);
    })
})

client.on("connectFailed", error => {
    console.log("Connection failed:", error);
});

client.connect("ws://localhost:8000/");