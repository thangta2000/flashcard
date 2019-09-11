$(document).ready(function(){
  if($('html').scrollTop() > 120) {
      $('.bookmark').css('display', 'block');
      $('.bookmark').addClass('animated fadeIn');
  }
  $(window).scroll(function(){
    if($('html').scrollTop() > 120) {
      $('.bookmark').css('display', 'block');
      $('.bookmark').removeClass('animated fadeOut');
      $('.bookmark').addClass('animated fadeIn');
    }
    else {
      $('.bookmark').addClass('animated fadeOut');
    }
  })
  
  $("a").on('click',function scroll(event){
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html').animate({
        scrollTop: $(hash).offset().top
      }, 1200);
    }
  });

  $('.modal').on('hide.bs.modal', function (e) {
    location.reload();
  });
});
