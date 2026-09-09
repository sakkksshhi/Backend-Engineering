const net = require("net");

const client = net.createConnection({
    port: 8080
}, () => {
    console.log("Connected to Server");
    client.write("Hello Server");
});

client.on("data" , data => {
    console.log("Server says:", data.toString());
});