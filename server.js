const net = require('net');

const HOST = 'localhost';
const PORT = 0013;

net.createServer(function(sock) {
    
    console.log('CONNECTED: ' + sock.remoteAddress +':'+ sock.remotePort);
    
    sock.on('data', function(data) {  
        console.log('DATA ' + sock.remoteAddress + ': ' + data);
        sock.write(data);  
    });
    
    sock.on('close', function(data) {
        console.log('CLOSED: ' + sock.remoteAddress +' '+ sock.remotePort);
    });

    
    
}).listen(PORT, HOST);

console.log('Server listening on ' + HOST +':'+ PORT);