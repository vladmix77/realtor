$(document).ready(function () {
    $(".popup").magnificPopup();
  
    $(".form").submit(function () {
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
      $('[name="phone"]').mask("+7(999) 999-9999");
    });
    
  });
  