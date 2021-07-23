$(function(){

  var $win = $(window),
      $fv = $('.fv'),
      fvHeight = $fv.outerHeight();

  $win.on('load scroll',function(){
    var scroll = $(this).scrollTop();

    if(scroll > fvHeight -50) {
      $('.site-title').addClass('black');
      $('.burger-btn').addClass('black');
    }else{
      $('.site-title').removeClass('black');
      $('.burger-btn').removeClass('black');
    }
  });

  // burger
  $('.burger-btn').on('click', function(){
    $('.bars').toggleClass('cross');
    $('body').toggleClass('noscroll');
    $('.header-nav').toggleClass('open');
    $('.burger-musk').fadeToggle(300);
  });

});