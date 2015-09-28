var $ = require('jquery');

var $body = $('body');
var $toggle = $('.js-mobile-nav');

$toggle.on('click', function(){
    $body.toggleClass('mobile-nav-active');
});
