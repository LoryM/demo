$(document).ready(function() { 

  var input = document.querySelector('.input');
 //var value = input.('Поиск по сайту');


  $(input).on("mouseenter", function(){ 
    if ($(':focus').is(input)) { 
      $(this).val(''); return false; }
    //input.placeholder = 'Название поиск|';
    $(this).val('Название поиск|').css('color','#000')
  }).on("mouseleave", function(){
    if ($(':focus').is(input)) { 
      $(this).val(''); return false; }
    //input.placeholder = placeholder;
    $(this).val('Поиск по сайту').css('color','#0082c8')
  });


$('.main__slider').slick({
    dots: true,
    infinite: true,
    speed: 1400,
    //autoplay: true,
    //autoplaySpeed: 2000,
    arrows:true,
    //arrows:true,
    slidesToShow: 1,
    //fade:true,
    slidesToScroll: 1,
    nextArrow:'<div class="slide__arrow_right"></div>', 
    prevArrow: '<div class="slide__arrow_left"></div>',
});

$('.bottom__slider').slick({
    dots: false,
    infinite: true,
    speed: 1400,
    arrows:true,
    slidesToShow: 5,
    slidesToScroll: 1,
    //useTransforms: false,
    useCSS: false,
    nextArrow:'<div class="slide__arrow_right arrow_right_bottom"></div>', 
    prevArrow: '<div class="slide__arrow_left arrow_left_bottom"></div>',
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
});


});