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
        // centerMode: true,
        prevArrow:"<div class='arrow-slider'><span class='slick-prev'></span></div>",
        nextArrow:"<div class='arrow-slider'><span class='slick-next'></span></div>",
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        }, {
            breakpoint: 480,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }]
    });

    $('.tintuc__list, .project__list').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        arrows: false,
        responsive: [{
            breakpoint: 768,
            settings: 'unslick'
        }]
    });

    $('.documents__list').slick({
        dots: false,
        // autoplay: true,
        autoplaySpeed: 4000,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
            }
        }]
    });

    $(window).on('resize', function() {
        $('.tintuc__list, .project__list').slick('resize');
    });

    $('#scrollUp').click(function(e){
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 600);
        return false; 
    });

    // click show menu
    $('#navLine').click(function() {
        $(this).toggleClass('active');
        $('.hd-menu').toggleClass('nav-active');
        $('body').toggleClass('show-menu');
    });

    $('.ft-lienket-title, .arrow-menu').click(function() {
        $(this).toggleClass('active');
        $(this).next().toggleClass('active');
    });

    // let img = $('.tab-link.current').find('img');
    // img.attr('src', img.attr('src').replace('white.png', 'color.png'));

    $('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');

        let img = $('.tab-link').find('img');
        img.attr('src', img.attr('src').replace('color.png', 'white.png'));

        let this_img = $(this).find('img');
        this_img.attr('src', this_img.attr('src').replace('white.png', 'color.png'));
    });

    $('.accordion').click(function(){
        $('.accordion').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $(this).next().addClass('current');

        let img = $('.accordion').find('img');
        img.attr('src', img.attr('src').replace('color.png', 'white.png'));

        let this_img = $(this).find('img');
        this_img.attr('src', this_img.attr('src').replace('white.png', 'color.png'));
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