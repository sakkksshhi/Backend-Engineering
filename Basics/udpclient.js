const dgram = require('dgram');

const client = dgram.createSocket('udp4');

const message = Buffer.from('Hello Server');

client.send(message, 8081, 'localhost', () => {
    console.log('Message sent to server');
});

client.on('message', (msg) => {
    console.log(`Server replied: ${msg}`);
    client.close();
});