(function($){
  $(function(){

    $('.profile-picture')
    .transition({
        animation: 'fade in',
        duration: '1s'
    })

    $('.name-header')
    .transition({
        animation: 'fade in',
        duration: '1s'
    })

    $('.education-header')
    .transition({
        animation: 'fade in',
        duration: '3s'})
  }); // end of document ready
})(jQuery); // end of jQuery name space