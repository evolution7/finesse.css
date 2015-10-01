"use strict";

var $ = require('jquery');

class Header {

    constructor() {
        this.bodyTag = $('body');
        this.bodyClass = 'mobile-nav-active';
        this.toggleElement = $('.js-mobile-nav');
        this.pageOverlay = $('.header__overlay');
        this.isNavOpen = false;

        this.events();
    }

    events() {
        let that = this;
        this.toggleElement.on('click', function() {
            that.isNavOpen ? that.close() : that.open();
        });

        this.pageOverlay.on('click', function() {
            that.close();
        });
    }

    open() {
        this.bodyTag.addClass(this.bodyClass);
        this.isNavOpen = true;
    }

    close() {
        this.bodyTag.removeClass(this.bodyClass);
        this.isNavOpen = false;
    }

}

new Header;