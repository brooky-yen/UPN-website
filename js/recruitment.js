$(function(){
  $('.panel-heading').collapser({
    target: 'next',
    mode: 'block',
    speed: 'slow',
    effect: 'fade'
  });


  $('.tooltips').tooltipster({
    animation: 'fade',
    delay: 200,
    contentAsHTML: true,
    theme: 'tooltipster-default',
    touchDevices: false,
    trigger: 'click',
    maxWidth: 860
  });

  $('.team-member img').hover(function(){
      $(this).toggleClass('pulse animated');
  });
});
