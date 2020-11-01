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
    
  });