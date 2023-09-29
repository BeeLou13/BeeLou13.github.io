
$( window ).ready(function() {
  
    var wHeight = $(window).height();
  
    $('.slide').height(wHeight).scrollie({
        scrollOffset : 0,
        scrollingInView : function(elem) {
                   
          var bgColor = elem.data('background');
          
          $('body').css('background-color', bgColor);
          
        }
      });
  
  });