'use strict';

function listenResize (first, container, render) {

    function update (now) {
        // var width = window.innerWidth;
        // var height = window.innerHeight;
        var width = container.offsetWidth;
        var height = container.offsetHeight;
        // console.log(width, height);
        if (width  > now.e) {
            now = now.e0;
            console.log('e');
        } else
        if (width  < now.w) {
            now = now.w0;
            console.log('w');
        } else
        if (height > now.s) {
            now = now.s0;
            console.log('s');
        } else
        if (height < now.n) {
            now = now.n0;
            console.log('n');
        }
        return now;
    }

    // iterate to converge

    function converge () {
        var stt, nxt, t0;
        nxt = first;
        do {
            stt = nxt;
            nxt = update(stt);
        } while (nxt !== stt);
        if (first !== nxt) {
            first = nxt;
            t0 = Date.now();
            render(first.x, first.y);
            console.log('rendered in: ' + (Date.now() - t0) + ' ms');
        }
    }

    converge();

    window.onresize = converge;
}

module.exports = listenResize;

/* eslint no-console:1 */
