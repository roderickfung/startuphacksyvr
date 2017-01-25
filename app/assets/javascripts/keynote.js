$(document).ready(function(){
  $(document).on('turbolinks:load', function(){

    $('.square').mouseover(function(){
      $(this).addClass('blue');
    }).mouseleave(function(){
      $(this).removeClass('blue');
    })

  })
})
