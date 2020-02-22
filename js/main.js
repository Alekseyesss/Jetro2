$(function () {

  // let wid, turn;

  // $(window).resize(function () {
  //   wid = $(window).width();
  //   if (wid < 480) {
  //     turn = "unslick";
  //   }
  //   else {
  //     turn = "slick";
  //   };
  // });

  $('.slider__big').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider__small',
    autoplay: true,
    autoplaySpeed: 2000,
  });
  $('.slider__small').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slider__big',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    arrows: false,

    responsive: [
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }]
  });

  $('.header__menu-btn').on('click', function () {
    $('.header__menu ul').slideToggle();
  });

});



