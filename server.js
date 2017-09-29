'use strict';

const Hapi = require('hapi');
const Http = require('http');

const server = new Hapi.Server();
server.connection({ port: 3000});

var io = require('socket.io')(server.listener);

io.on('connection', function (socket) {
    console.log('connected!!!!!!!!');
    socket.emit('Oh hii!');

    socket.on('burp', function () {
        socket.emit('Excuse you!');
    });
});


const startGame = require('./api/game');
const userDb = {
    'oiajsdf': { email: 'sijofsidfj' },
    'jefefji': { email: 'osijdf98sjdf' }
};

const _addUser = (newUser, userDb) => {
    userDb[newUser.email] = newUser
};

const _checkIfEnoughPlayers = (callback) => {
    if (Object.keys(userDb).length < 2) {
        return setImmediate(() => _checkIfEnoughPlayers(callback));
    }

    callback();
}
server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Hello, world!');
    }
});

server.route({
    method: 'POST',
    path: '/login',
    handler: function (request, reply) {
        _addUser(request.payload, userDb)
        reply();
    }
});

server.route({
    method: 'GET',
    path: '/users',
    handler: function (request, reply) {
        reply(userDb);
    }
});

server.start((err) => {
    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);

    _checkIfEnoughPlayers(() => startGame(userDb));
});

