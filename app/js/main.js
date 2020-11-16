$(document).ready(function () {
    $(".popup-with-zoom-anim").magnificPopup({
      type: 'inline',
  
      fixedContentPos: false,
      fixedBgPos: true,
  
      overflowY: 'auto',
  
      closeBtnInside: true,
      preloader: false,
      
      midClick: true,
      removalDelay: 300,
      mainClass: 'my-mfp-zoom-in'
    });
  
    $("#form").submit(function () {
      $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize(),
      }).done(function () {
        // $(this).find("input").val("");
        // alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
        // $("#form").trigger("reset");
        setTimeout(function () {
          $.magnificPopup.close();
        }, 1000);
      });
      return false;
    });
  
    // Маска ввода номера телефона (плагин maskedinput)
    $(function ($) {
      $('[name="phone"]').mask("+7 (999) 999-9999");
    });

    function backToTop() {
      let button = $(".back-to-top");
    
      $(window).on("scroll", () => {
        if ($(this).scrollTop() >= 50) {
          button.fadeIn();
        } else {
          button.fadeOut();
        }
      });
    
      button.on("click", (e) => {
        e.preventDefault();
        $("html").animate({ scrollTop: 0 }, 1000);
      });
    }
    
    backToTop();
    
  });