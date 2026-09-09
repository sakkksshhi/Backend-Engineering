const dgram = require('dgram');

const socket = dgram.createSocket('udp4');

socket.on('message', (msg, rinfo) => {
    console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);

    const response = Buffer.from('Hello Client');

    socket.send(response, rinfo.port, rinfo.address);
});

socket.bind(8081);