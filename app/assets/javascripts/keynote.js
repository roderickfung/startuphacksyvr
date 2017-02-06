$(document).ready(function(){
  $(document).on('turbolinks:load', function(){

    $('.square').mouseover(function(){
      $(this).addClass('blue');
      // $('.hoverlay').css('display', 'block');
      // $('.hoverlay').css('opacity', '1');
    }).mouseleave(function(){
      $(this).removeClass('blue');
      // $('.hoverlay').css('display', 'none');
      // $('.hoverlay').css('opacity', '0');
    })

    // $('.keynote-image').mouseover(function(){
    //   $(this).addClass('hoverlay');
    // }).mouseleave(function(){
    //   $(this).removeClass('hoverlay');
    // })

  })
})
