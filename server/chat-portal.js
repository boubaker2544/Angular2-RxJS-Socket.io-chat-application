exports = module.exports = function (io) {
    var numUsers = 0;
    io.sockets.on('connection', function (socket) {
        
        console.log('socket.io connection established');
        var addedUser = false;

        // when the client emits 'new message', this listens and executes
        socket.on('new message', function (msg) {
            console.log('noticed new message');
            console.log(msg);
            
            var parsedMsg = JSON.parse(msg);
            socket.emit('message received', parsedMsg.id); // Send message to sender
            socket.broadcast.emit('message', msg); // Send message to everyone BUT sender
        });

        // when the client emits 'add user', this listens and executes
        socket.on('add user', function (username) {
            if (addedUser) return;

            // we store the username in the socket session for this client
            socket.username = username;
            ++numUsers;
            addedUser = true;
            socket.emit('login', {
                numUsers: numUsers
            });
            
            // echo globally (all clients) that a person has connected
            socket.broadcast.emit('user joined', {
                username: socket.username,
                numUsers: numUsers
            });
        });

        // when the client emits 'typing', we broadcast it to others
        socket.on('start typing', function (user) {

            socket.broadcast.emit('user typing', user);
            
            /*socket.broadcast.emit('user typing', {
                username: socket.username
            });*/
        });

        // when the client emits 'stop typing', we broadcast it to others
        socket.on('stop typing', function (user) {

            socket.broadcast.emit('user stopped typing', user);
            /*
            socket.broadcast.emit('user stopped typing', {
                username: socket.username
            });*/
        });

        // when the user disconnects.. perform this
        socket.on('disconnect', function () {
            if (addedUser) {
                --numUsers;

                // echo globally that this client has left
                socket.broadcast.emit('user left', {
                    username: socket.username,
                    numUsers: numUsers
                });
            }
        });
    });
    console.log('starting chat-portal');
}
