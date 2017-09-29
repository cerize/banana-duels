const _ = require('lodash');
const async = require('async');

const _pushToPlayers = (players, socket, myEmitter, callback) => {
    // Need to get responses from players
    console.log('playser', players);
    _.each(players, (player) => {
        socket.to(player).emit('duel', 'fuck you');
    })

    async.race([
        function(done) {
            myEmitter.on('event', (id) => {
                console.log('an event occurred!');
                done(null, id);
            });        
        }
    ],
    function (err, result) {
        callback(result)
    });
    // myEmitter.on('event', (id) => {
    //     console.log('an event occurred!');
    //     callback(id);
    // });
};

const startGame = (socket, userDb, myEmitter) => {
    const playersToPlay = _.sampleSize(userDb, 2)
    _pushToPlayers(playersToPlay, socket, myEmitter, (id) => {
        // _calculateWinner();
        // _sendResult();
        socket.to(id).emit('result', { result: 'winner' });
        socket.to(_.filter(playersToPlay, (player) => player != id)).emit('result', { result: 'loser' })
        // socket.to(playersToPlay[1]).emit('result', { result: 'loser' });


        // console.log('game done');
        setTimeout(() => startGame(socket, userDb, myEmitter), 2000);
    });
};

module.exports = startGame;
