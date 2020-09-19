$(function(){
  var $div = $('div');
  console.log($div);

  var $div1 = $('#div1');
  console.log($div1);

  var $span = $('#div1 span');
  console.log($span);

  var $box= $('#box');

  $box.css('color', 'red');

  $box.html('<p>content</p>');

  var className = $box.attr('class');
  console.log(className);

  var $contbox = $('#contbox');
  $contbox.css('color', 'green');
  var contClassName = $contbox.attr('class');
  console.log(contClassName);

  $('#btn').click(function(){
    console.log('clicked!!');
  });

  $('#move').animate({left: '500px'}, 1000);
  $('#fadeoutbox').fadeOut();
});
