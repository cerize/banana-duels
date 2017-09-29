var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.json('sup')
});

io.on('connection', function(socket){
  console.log('a user connected');
});

io.on('message', (message) => {
  console.log('message emit')
  // Save the message document in the `messages` collection.
  r.
  io.broadcast.emit('message', message);
  // The `broadcast` allows us to send to all users but the sende
});

http.listen(5000, function(){
  console.log('listening on *:5000');
});