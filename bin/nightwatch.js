#!/usr/bin/env node
'use strict';

// watch the file changes to fire demo builf process

var watch = require('watch'),
    fs = require('fs'),
    browserify = require('browserify');

watch.createMonitor('./src/', function (monitor) {
    monitor.on('changed', function (f) {
        console.log('changes: ', f);
        var o = fs.createWriteStream('./build/demo1/app.js');
        var b = browserify('./src/demo1.js').bundle();
        b.on('error', console.error);
        b.pipe(o);
    });
});

/* eslint no-console:0 */
