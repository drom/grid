'use strict';

var listenResize = require('./listen-resize'),
    gridTraps = require('./grid-traps');

module.exports = function () {
    return {
        listenResize: listenResize,
        gridTraps: gridTraps
    };
};
