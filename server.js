'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: 3000, host: 'localhost'  });

const userDb = {};

const _addUser = (newUser, userDb) => {
    userDb[newUser.email] = newUser
};
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

    startGame(
        choosePlayers,
        waitForRequest,
        sendResults,
        startGame
    );

});

