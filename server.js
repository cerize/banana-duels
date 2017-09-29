'use strict';

const _ = require('lodash');
const EventEmitter = require('events');

const Hapi = require('hapi');
const Http = require('http');

const server = new Hapi.Server();
server.connection({ port: 3000 });

var io = require('socket.io')(server.listener);

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

io.on('connection', function (socket) {
    

    if (_.get(socket, 'conn.remoteAddress') !== '192.168.0.24') {
        _addUser(socket.id, userDb);
    }

    socket.on('splat', () => {
        myEmitter.emit('event', socket.id);
    })

    socket.on('disconnect', () => {
        _removeUser(socket.id, userDb);
    })
});


const startGame = require('./api/game');
const userDb = {};

const _addUser = (newUser, userDb) => {
    userDb[newUser] = newUser
};

const _removeUser = (user, userDb) => {
    delete userDb[user];
}

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

    _checkIfEnoughPlayers(() => startGame(io, userDb, myEmitter));
});

