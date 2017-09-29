const _ = require('lodash');
const async = require('async');

const _pushToPlayers = (players, socket, myEmitter, callback) => {
    // Need to get responses from players
    console.log('playser', players);
    _.each(players, (player) => {
        socket.to(player).emit('duel', 'fuck you');
    })

    myEmitter.on('event', () => {
        console.log('an event occurred!');
        callback();
    });
};

const startGame = (socket, userDb, myEmitter) => {
    const playersToPlay = _.sampleSize(userDb, 2)
    _pushToPlayers(playersToPlay, socket, myEmitter, () => {
        // _calculateWinner();
        // _sendResult();
        socket.to(playersToPlay[0]).emit('result', { result: 'winner' });
        socket.to(playersToPlay[1]).emit('result', { result: 'loser' });


        // console.log('game done');
        // setTimeout(() => startGame(socket, userDb, myEmitter), 2000);
    });
};

module.exports = startGame;
