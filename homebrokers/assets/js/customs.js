$(document).ready(function() {

    'use strict';

    var fullUrl = window.location.protocol + "//" + window.location.hostname + ":" + window.location.port + window.location.pathname;
    var parts = fullUrl.split('/');
    parts.pop();
    var url = parts.join('/');

    $('.best-project__list').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        prevArrow:"<div class='slick-prev'><img class='a-left control-c prev' src='"+url+"/assets/images/commons/arrow-left.png'></div>",
        nextArrow:"<div class='slick-next'><img class='a-right control-c next' src='"+url+"/assets/images/commons/arrow-right.png'></div>"
    });

    $('#scrollUp').click(function(e){
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 600);
        return false; 
    });
});

$(function() {
    //----- OPEN
    $('[data-popup-open]').on('click', function(e) {
        var targeted_popup_class = jQuery(this).attr('data-popup-open');
        $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);

        e.preventDefault();
    });

    //----- CLOSE
    $('[data-popup-close]').on('click', function(e) {
        var targeted_popup_class = jQuery(this).attr('data-popup-close');
        $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);

        e.preventDefault();
    });
});