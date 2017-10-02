const _ = require('lodash');
const async = require('async');

const _pushToPlayers = (players, socket, myEmitter, callback) => {
    // Need to get responses from players
    _.each(players, (player) => {
        socket.to(player).emit('duel', '');
    })

    async.race([
        (done) => {
            myEmitter.on('event', (id) => {
                console.log('an event occurred!');
                done(null, id);
            });
        }
    ],
    (err, result) => {
        callback(result)
    });
};

const startGame = (socket, userDb, myEmitter) => {
    const playersToPlay = _.sampleSize(userDb, 2)
    _pushToPlayers(playersToPlay, socket, myEmitter, (id) => {
        socket.to(id).emit('result', { result: 'winner' });
        socket.to(_.filter(playersToPlay, (player) => player != id)).emit('result', { result: 'loser' })

        // Restart game
        setTimeout(() => startGame(socket, userDb, myEmitter), 2000);
    });
};

module.exports = startGame;
