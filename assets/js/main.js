/* global $ */
$(document).ready(function () {
  'use strict'

  let loader = function () {
    setTimeout(function () {
      let loader = $('#pb_loader');
      if (loader.length > 0) {
        loader.removeClass('show')
      }
    }, 500)
  };
  loader()

  // scroll
  let scrollWindow = function () {
    $(window).scroll(function () {
      let $w = $(this);
      let st = $w.scrollTop();
      let navbar = $('.pb_navbar');
      let sd = $('.js-scroll-wrap');

      if (st > 150) {
        if (!navbar.hasClass('scrolled')) {
          navbar.addClass('scrolled')
        }
      }
      if (st < 150) {
        if (navbar.hasClass('scrolled')) {
          navbar.removeClass('scrolled sleep')
        }
      }
      if (st > 350) {
        if (!navbar.hasClass('awake')) {
          navbar.addClass('awake')
        }

        if (sd.length > 0) {
          sd.addClass('sleep')
        }
      }
      if (st < 350) {
        if (navbar.hasClass('awake')) {
          navbar.removeClass('awake')
          navbar.addClass('sleep')
        }
        if (sd.length > 0) {
          sd.removeClass('sleep')
        }
      }
    })
  };
  scrollWindow()

  // slick sliders
  function slickSliders () {
    $('.single-item-no-arrow').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 7000,
      arrows: false,
      draggable: false
    })
  }
  slickSliders()

  // navigation
  let OnePageNav = function () {
    $(".smoothscroll[href^='#'], #probootstrap-navbar ul li a[href^='#']").on('click', function (e) {
      e.preventDefault()
      let hash = this.hash;
      let navToggler = $('.navbar-toggler');
      $('html, body').animate({

        scrollTop: $(hash).offset().top
      }, 700, 'easeInOutExpo', function () {
        window.location.hash = hash
      })

      if (navToggler.is(':visible') && !$(this).hasClass('no-nav-expand')) {
        navToggler.click()
      }
    })
  };
  OnePageNav()

  let offCanvasNav = function () {
    let toggleNav = $('.js-pb_nav-toggle');
    let offcanvasNav = $('.js-pb_offcanvas-nav_v1');
    if (toggleNav.length > 0) {
      toggleNav.click(function (e) {
        $(this).toggleClass('active')
        offcanvasNav.addClass('active')
        e.preventDefault()
      })
    }
    offcanvasNav.click(function (e) {
      if (offcanvasNav.hasClass('active')) {
        offcanvasNav.removeClass('active')
        toggleNav.removeClass('active')
      }
      e.preventDefault()
    })
  };
  offCanvasNav()

  function updateYear () {
    let year = $('#year');
    year.text(new Date().getFullYear())
  }

  updateYear()
})

$(window).on('load', function () {
  let loader = function () {
    let loader = $('#pb_loader');
    if (loader.length > 0) {
      loader.removeClass('show')
    }
  };
  loader()
})
