'use strict';

module.exports = {
    context : __dirname + '/javascript/app/',
    entry: './index',
    module: {
        loaders: []
    },
    output: {
        path: __dirname + '/javascript/dist/',
        filename: 'bundle.js'
    },
    resolve : {
        root : [
            __dirname + '/javascript/app',
            __dirname + '/javascript/vendor'
        ],
        modulesDirectories: ['javascript', 'node_modules'],
        extensions: ['', '.js'],
        alias: {
            jquery : 'jquery/dist/jquery.min',
            gsap : 'gsap/src/minified/TweenMax.min'
        }
    }
};