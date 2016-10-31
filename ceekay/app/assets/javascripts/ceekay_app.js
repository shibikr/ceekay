// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/

var loadPage = function () {
  var gallery = $('.gallery');
  var contactus = $('.contactus');
  var home = $('.home');
  $('div').remove('.gallery');
  $('div').remove('.contactus');
  $('#gallerybutton').on('click',function () {
    var removeClass = $('.body').children().attr('class');
    $('div').remove('.'+removeClass);
    $('.body').append(gallery);
  });
  $('#contactusbutton').on('click',function () {
    var removeClass = $('.body').children().attr('class');
    $('div').remove('.'+removeClass);
    $('.body').append(contactus);
  });
  $('#homebutton').on('click',function () {
    var removeClass = $('.body').children().attr('class');
    $('div').remove('.'+removeClass);
    $('.body').append(home);
  });
};



window.onload = loadPage;
