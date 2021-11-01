// 메인슬라이더

$(document).ready(function () {
  $(".slider-wrap").slick({
    slide: "div",
    dots: true,
    autoplay: true,
    autoplaySpeed: 10000,
    fade: false,
    pauseOnHover: false,
  });

  $('.slider-wrap').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    $(".main-top-visual .slick-pagination li").removeClass("active");
  });
  $('.slider-wrap').on('afterChange', function (event, slick, currentSlide) {

    $(".main-top-visual .slick-pagination li").eq(currentSlide).addClass("active");

  });

  $(".bullet").click(function () {
    var indexNum = $(this).index(0);
    $(".slider-wrap").slick("slickGoTo", indexNum);


  });

  $(".play-btn").click(function () {
    $(".paused-btn").addClass("active");
    $(this).removeClass("active");
    $(".slider-wrap").slick("slickPlay");
  });

  $(".paused-btn").click(function () {
    $(".play-btn").addClass("active");
    $(this).removeClass("active");
    $(".slider-wrap").slick("slickPause");
  });


});

$(document).ready(function () {
  $(".news-box").slick({
    dots: true,
    arrows: true,
    prevArrow: $(".news-slick-prev"),
    nextArrow: $(".news-slick-next"),
  });
  $(".news-slick-prev").click(function () {

    $(".news-box").slick("slickPrev")

  });

  $(".news-slick-next").click(function () {

    $(".news-box").slick("slickNext")

  });

})

$(document).ready(function () {

  $("html").on('mousewheel', function (e) {
    var wheel = e.originalEvent.wheelDelta;

    if (wheel > 0) {
      $(".top-bar").css({
        'top': '0px',
        'transition': '0.5s'
      })
    } else {
      $(".top-bar").css({
        'top': '-100px',
        'transition': '0.5s'
      })
    }
  });
});