

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
Fancybox.bind('[data-fancybox="showcaseGallery"]', {
  caption: function (fancybox, slide) {
    const figurecaption = slide.triggerEl?.querySelector(".tab-caption");
    return figurecaption ? figurecaption.innerHTML : slide.caption || "";
  },
});
Fancybox.bind('[data-fancybox="casestudiesGallery"]', {
  caption: function (fancybox, slide) {
    const figurecaption = slide.triggerEl?.querySelector(".tab-caption");
    return figurecaption ? figurecaption.innerHTML : slide.caption || "";
  },
});
Fancybox.bind('[data-fancybox="portfolioGallery"]', {
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


var showcaseSwiper = new Swiper(".asb19__showcase--swiper", {
  autoPlay: false,
  spaceBetween: 24,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: ".swiper-button-next-showcaseSW",
    prevEl: ".swiper-button-prev-showcaseSW",
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

var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';

var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        width: '100%',
        height: '100%',
        playerVars: {
            autoplay: 1,
            loop: 1,
            controls: 0,
            // showinfo: 0,
            autohide: 1,
            modestbranding: 1,
            mute: 1,
            suggestedQuality: 'default',
        },
        videoId: document.getElementById('player').dataset.id,
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
    player.mute();
}

var done = false;

function onPlayerStateChange(e) {
    var id = document.getElementById('player').dataset.id;

    if (e.data === YT.PlayerState.ENDED) {
        player.loadVideoById(id);
    }
}

$(document).ready(function () {
  const $items = $('.asb19__portfolio--item');
  let index1 = 1;
  let diff1 = 8; 
  while (index1 <= $items.length) {
    $items.eq(index1 - 1).addClass('asb19__portfolio--span3');
    index1 += diff1;
    diff1 = diff1 === 8 ? 6 : 8;
  }
  let index2 = 2;
  let diff2 = 6;
  while (index2 <= $items.length) {
    $items.eq(index2 - 1).addClass('asb19__portfolio--span2');
    index2 += diff2;
    diff2 = diff2 === 6 ? 8 : 6;
  }
});


$(document).ready(function() {
  var $shapesCollection = $(".asb19__portfolio--item");
  var $tooltip = $("#tooltip");
  $shapesCollection.on("mousemove", function(evt) {
    showTooltip(evt, $(this));
  });

  $shapesCollection.on("mouseout", function() {
    hideTooltip();
  });

  function showTooltip(evt, $element) {
    $tooltip.css({
      "visibility": "visible",
      "top": (evt.clientY + 5) + "px",
      "left": (evt.clientX + 5) + "px"
    });
    $tooltip.text($element.attr("data-tooltip-text"));
  }

  function hideTooltip() {
    $tooltip.css("visibility", "hidden");
  }
});

