$(document).ready(function(){
    $(".design").click(function(){
      $(".design").hide(1200);
      $(".p1").toggle(1200);
      $(".p1").show(1200);
    })
    $(".p1").click(function(){
      $(".p1").hide(1200);
      $(".design").toggle(1200);
      $(".design").show(1200);
    });
  });
  $(document).ready(function(){
      $(".development").click(function(){
        $(".development").hide(1200);
        $(".p2").toggle(1200);
        $(".p2").show(1200);
      })
      $(".p2").click(function(){
        $(".p2").hide(1200);
        $(".development").toggle(1200);
        $(".development").show(1200);
      });
  });
  $(document).ready(function(){
      $(".product").click(function(){
        $(".product").hide(1200);
        $(".p3").toggle(1200);
        $(".p3").show(1200);
      })
      $(".p3").click(function(){
        $(".p3").hide(1200);
        $(".product").toggle(1200);
        $(".product").show(1200);
      });
  });
  $(document).ready(function(){
      $('.text').hover(function () {
      $(this).animate({opacity:'1'});
      },
      function () {
      $(this).animate({opacity:'0'});
  })
  });
  $(document).ready(function(){
      $('#mc-embedded-subscribe-form').submit(function(event){
          var userName = $('input#mce-NAME').val();
          var email = $('input#mce-EMAIL').val();
          if(userName && email != ''){
              alert ('Thank you ' + userName + '.' + ' Your subscription is well received');
          }else {
              alert ('Please enter your name and email');
          }
          event.preventDefault();
      })
  });
  