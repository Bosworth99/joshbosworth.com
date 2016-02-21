
var Story = (function(){
    'use strict';

    var TweenMax = require('gsap');
    var $ = require('jquery');

    var _this
        , _pages
        , _page
        , _clickDown
        , _clickUp
        , _count;

    var _index = 0;
    var _vert = 350;

    function init(){
        console.log('Story::init', this);

        _this = this;

        _pages = document.getElementById('pages');
        _page = document.getElementsByClassName('page');
        _count = _page.length;
        _clickDown = document.getElementById('clickDown');
        _clickUp = document.getElementById('clickUp');

        _vert = 350;

        addEventHandlers();
        doChangePage();
    }

    function addEventHandlers(){
        _clickDown.addEventListener('click', onClickUp );
        _clickUp.addEventListener('click', onClickDown );
    }

    function onClickUp(){
        _index++;

        if( _index >= _page.length){
            _index = _page.length;
        }

        doChangePage();
    }

    function onClickDown(){
        _index--;

        if( _index < 0){
            _index = 0;
        }

        doChangePage();
    }

    function doChangePage(){
        //console.log('App.Pages::doChangePage _index:%s', _index);

        var top = String((_index * _vert) * -1);

        TweenMax.to( _pages, '.150', {y:top});

        if (_index === 0){

            _clickDown.style.display = "inline-block";
            _clickUp.style.display = "none";

        } else if (_index > 0 && _index < _count-1 ) {

            _clickDown.style.display = "inline-block";
            _clickUp.style.display = "inline-block";

        } else if ( _index === _count-1 ) {

            _clickDown.style.display = "none";
            _clickUp.style.display = "inline-block";
        }

    }

    return {
        init : init
    };

}());

module.exports = Story;