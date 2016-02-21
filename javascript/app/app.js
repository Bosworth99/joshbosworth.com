
var App = (function(){
    'use strict';

    var Story = require('story');

    var _this
        , _modules;

    function init(){
        console.log('App::init');

        _this = this;

        _modules = {};
        _modules.story = Story;

    }

    function start(){
        console.log('App::start', _this);

        _modules.story.init();
    }

    return {
        init : init,
        start : start
    };
}());

module.exports = App;