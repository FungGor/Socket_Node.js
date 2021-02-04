var net = require('net');
var HOST = '127.0.0.1'; //parameterize the IP of the Listen
var PORT = 6969; //TCP Listen Port

//Create an instance of the Server
net.createServer(function(sock){
    //Receives a connection - a socket object is assosciated to the connection automatically
    console.log('Connected: '+sock.remoteAddress+':'+sock.remotePort);

    //Add a 'data' - "event handler" in this socket instance
    sock.on('data',function(data){
       //data was received in the socket
       //writes the received message back to the socket (echo)
       console.log('Received '+data);
       sock.write(data);
    });

    //Add a 'close' - "event handler" in this socket instance
    sock.on('close',function(data){
       //close connection
       console.log('CLOSED '+sock.remoteAddress+' '+sock.remotePort);
    });
}).listen(PORT,HOST);

console.log('Server listening on '+HOST+":"+PORT);