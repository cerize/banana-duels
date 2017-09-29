const _ = require('lodash');

const _pushToPlayers = (players, callback) => {
    // Need to get responses from players
    callback();
};

const startGame = (userDb) => {
    const playersToPlay = _.sampleSize(userDb, 2)
    _pushToPlayers(playersToPlay, () => {
        // _calculateWinner();
        // _sendResult();
        console.log('game done');
        setImmediate(() => startGame(userDb));
    });
};

module.exports = startGame;
