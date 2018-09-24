var express = require('express');

var app = express();

var server = require('http').Server(app);

var io = require('socket.io')(server);


app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
  });
  
    io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('sending', function(data){      
        console.log(data);
        io.emit('recieve', data);  }); 
        
    socket.on('disconnect', function(){

      console.log('user disconnected');
    });
  });

server.listen(process.env.PORT||3000,()=>{
    console.log('server started');
});