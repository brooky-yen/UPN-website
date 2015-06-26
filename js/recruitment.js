$(function(){
  $('.panel-heading').collapser({
    target: 'next',
    mode: 'block',
    speed: 'slow',
    effect: 'fade'
  });

  $('.tooltips').popover({
      html: true
  });

  $(window).resize(function(){
      if ($('.popover').is(":visible")) $('.popover').popover('show');
  });

  $('.team-member img').hover(function(){
      $(this).toggleClass('pulse animated');
  });

  $(window).resize(function(){
      if ($('.popover').is(":visible")) {
          $('.poper').popover('show');
      }
  });
});
