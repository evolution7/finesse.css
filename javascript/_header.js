var $ = require('jquery');

var $body = $('body');
var $toggle = $('.js-mobile-nav');
var $overlay = $('.header__overlay');

$toggle.on('click', function(){
    $body.toggleClass('mobile-nav-active');
    $overlay.on('click', function(){
        $body.removeClass('mobile-nav-active');
        $(this).off('click');
    });
});

