$(document).ready(function() {

  $('#toTopBtn').fadeOut();
  $(window).scroll( function() {
    if( $(window).scrollTop() > 200 ) {
      $('#toTopBtn').fadeIn(1000);
    } else {
      $('#toTopBtn').fadeOut(200);
    }
  });

  $('#toTopBtn').on('click', () => {
    $('html, body').animate( {scrollTop: 0}, 800);
  });
});