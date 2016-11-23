'use strict';

var grid = require('../lib/'),
    stringify = require('onml/lib/stringify');

var theGrid = grid();

function genSVG (w, h) {
    var size = 32;
    var res = ['svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: w, height: h,
        viewBox: [0, 0, w, h].join(' '),
        class: 'central'
    }];
    var x, y;
    for (y = 0; y < h; y += size) {
        for (x = 0; x < w; x += size) {
            if ((x + y) & 32) {
                res.push(['rect', {
                    x: x,
                    y: y,
                    width: size,
                    height: size
                }]);
            }
        }
    }
    return res;
}

var trap = theGrid.gridTraps({
    wmin: 6, wmax: 32,
    hmin: 4, hmax: 24,
    size: 32
});

var container = document.getElementById('container');

theGrid.listenResize(
    trap,
    container,
    function (w, h) {
        container.innerHTML = stringify(genSVG(w, h));
    }
);
