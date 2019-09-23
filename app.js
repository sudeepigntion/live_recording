var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.use(express.static('static'))

app.use(express.static('dist'))

app.use('/models', express.static('weights'))

app.get('/', function(req, res)
{
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket)
{
    console.log('a user connected');
    socket.on('disconnect', function()
    {
      console.log('user disconnected');
    });

    socket.on('sendMessage', function(msg)
    {
        console.log(msg);

        io.emit("sendMessage","Hello from server");
    });

    socket.on('binarystream', function(stream)
    {
        console.log(stream);
    })
});


http.listen(3000, function()
{
  console.log('listening on *:3000');
});