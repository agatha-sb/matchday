

// ************************************************* //
// * ++++++++ 01. Header sticky & navbar +++++++++ * //
// ************************************************* //

$(window).on('scroll', function() {
  if($(this).scrollTop() > 250 ) {
    $(".asb19__header").addClass("fixed__header");
    $(".header-top").slideUp();
  } else {
    $(".asb19__header").removeClass("fixed__header");
    $(".header-top").slideDown();
  }
});

// ************************************************* //
// * ++++++++      02. Fancybox          +++++++++ * //
// ************************************************* //
Fancybox.bind('[data-fancybox="gallery-1"]', {
  caption: function (fancybox, slide) {
    const figurecaption = slide.triggerEl?.querySelector(".tab-caption");
    return figurecaption ? figurecaption.innerHTML : slide.caption || "";
  },
});

$(document).ready(function(){
  if ($(window).width() > 991) {
    $(".asb19__header .nav-link.dropdown-toggle").removeAttr("data-bs-toggle");
  }
})


var agentsSwiper = new Swiper(".asb19__agents--swiper", {
  autoPlay: false,
  spaceBetween: 24,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: ".swiper-button-next-agentsSW",
    prevEl: ".swiper-button-prev-agentsSW",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 2
    },
    480: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    }
  }
});

$('.popup-youtube').magnificPopup({
  type: 'iframe',
  iframe: {
    patterns: {
      youtube: {
        index: 'youtube.com/',
        id: function (url) {
          var m = url.match(/[\\?\\&]v=([^\\?\\&]+)/);
          if (!m || !m[1]) return null;
          return m[1];
        },
        src: '//www.youtube.com/embed/%id%?autoplay=1'
      },
      vimeo: {
        index: 'vimeo.com/',
        id: function (url) {
          var m = url.match(/(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/);
          if (!m || !m[5]) return null;
          return m[5];
        },
        src: '//player.vimeo.com/video/%id%?autoplay=1'
      }
    }
  }
});
