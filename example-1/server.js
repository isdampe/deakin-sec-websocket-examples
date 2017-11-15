const WebSocket = require('ws'); //Use the 'ws' WebSocket library.

const server = new WebSocket.Server({port: 8080 }); //Create a _listening_ socket on TCP port 8080.

//At this point, the 'ws' WebSocket library has set up all of the complicated
//networking tasks related with a WebSocket for us. All we need to do now is
//tell it how to respond to certain events.

//When the server receives a new connection from a _client socket_ (i.e, the web browser).
server.on('connection', function connection(ws) {

  //When the current connection receives data from a _client socket_ (i.e, the web browser).
  ws.on('message', function incoming(message) {
    console.log('Data received: %s', message); //Log the data received to the terminal.
    ws.send('Hello World'); //Send the data 'Hello World' to the _client_ socket (i.e, the web browser).
  });

});

console.log('WebSocket server is now listening on ws://localhost:8080');
