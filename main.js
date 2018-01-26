$(document).ready(function(){

  /*=============*/
  /*   MOBILE    */
  /*=============*/

  /*----MENU-----*/
  $("#mobile-home").click(function(){
    $(".menu").trigger("click");
    $("#titulinis").fadeIn(1500);
    $("#mobile-home").addClass("inverted");
    $("#mobile-about, #mobile-services, #mobile-professionals, #mobile-contacts").removeClass("inverted");
    $("#apie-mus, #paslaugos, #darbuotojai, #kontaktai, #buhalteriai, #auditoriai").hide();
  });

  $("#mobile-about").click(function(){
    $(".menu").trigger("click");
    $("#apie-mus").fadeIn(1500);
    $("#mobile-about").addClass("inverted");
    $("#mobile-home, #mobile-services, #mobile-professionals, #mobile-contacts").removeClass("inverted");
    $("#titulinis, #paslaugos, #darbuotojai, #kontaktai, #buhalteriai, #auditoriai").hide();
  });

  $("#mobile-services").click(function(){
    $(".menu").trigger("click");
    $("#paslaugos").fadeIn(1500);
    $("#mobile-services").addClass("inverted");
    $("#mobile-about, #mobile-home, #mobile-professionals, #mobile-contacts").removeClass("inverted");
    $("#titulinis, #apie-mus, #darbuotojai, #kontaktai, #buhalteriai, #auditoriai").hide();
  });

  $("#mobile-professionals").click(function(){
    $(".menu").trigger("click");
    $("#darbuotojai").fadeIn(1500);
    $("#mobile-professionals").addClass("inverted");
    $("#mobile-about, #mobile-services, #mobile-home, #mobile-contacts").removeClass("inverted");
    $("#titulinis, #apie-mus, #paslaugos, #kontaktai, #buhalteriai, #auditoriai").hide();
  });

  $("#mobile-contacts").click(function(){
    $(".menu").trigger("click");
    $("#kontaktai").fadeIn(1500);
    $("#mobile-contacts").addClass("inverted");
    $("#mobile-about, #mobile-services, #mobile-professionals, #mobile-home").removeClass("inverted");
    $("#titulinis, #apie-mus, #paslaugos, #darbuotojai, #buhalteriai, #auditoriai").hide();
  });

  $(".menu").click(function(){
    $("#menu-list").toggleClass("hidden-menu");
  });

/*----OTHER BUTTONS----*/
  $("#aud, #aud-2, #aud-3").click(function(){
    $("#auditoriai").fadeIn(500);
    $("#titulinis, #apie-mus, #paslaugos, #darbuotojai, #kontaktai, #buhalteriai").hide();
  });

  $("#buh, #buh-2, #buh-3").click(function(){
    $("#buhalteriai").fadeIn(500);
    $("#titulinis, #apie-mus, #paslaugos, #darbuotojai, #kontaktai, #auditoriai").hide();
  });

  /*=============*/
  /*   DESKTOP   */
  /*=============*/
  $("#arrow-down").click(function(){
    $('html, body').animate({
        scrollTop: $('#navigation').offset().top
      }, 1500);
      $("#apie-mus").fadeIn(1500);
      $("#nav-apie").addClass("border");
      $("#nav-paslaugos, #nav-specialistai, #nav-kontaktai").removeClass("border");
      $("#paslaugos, #darbuotojai, #kontaktai-2").hide();
  });

  $("#logo2").click(function(){
    $('html, body').animate({
        scrollTop: $('#logo').offset().top
      }, 1500);
  });

    $("#nav-apie").click(function(){
      $("#apie-mus").fadeIn(1500);
      $("#nav-apie").addClass("border");
      $("#nav-paslaugos, #nav-specialistai, #nav-kontaktai").removeClass("border");
      $("#paslaugos, #darbuotojai, #kontaktai-2, #buhalteriai, #auditoriai").hide();
    });

    $("#nav-paslaugos").click(function(){
      $("#paslaugos").fadeIn(1500);
      $("#nav-paslaugos").addClass("border");
      $("#nav-apie, #nav-specialistai, #nav-kontaktai").removeClass("border");
      $("#apie-mus, #darbuotojai, #kontaktai-2, #buhalteriai, #auditoriai").hide();
    });

    $("#nav-specialistai").click(function(){
      $("#darbuotojai").fadeIn(1500);
      $("#nav-specialistai").addClass("border");
      $("#nav-paslaugos, #nav-apie, #nav-kontaktai").removeClass("border");
      $("#apie-mus, #paslaugos, #kontaktai-2, #buhalteriai, #auditoriai").hide();
    });

    $("#nav-kontaktai").click(function(){
      $("#kontaktai-2").fadeIn(1500);
      $("#nav-kontaktai").addClass("border");
      $("#nav-paslaugos, #nav-specialistai, #nav-apie").removeClass("border");
      $("#apie-mus, #paslaugos, #darbuotojai, #buhalteriai, #auditoriai").hide();
    });

    $("#aud").click(function(){
      $("#auditoriai").fadeIn(1500);
      $("#apie-mus, #paslaugos, #darbuotojai, #kontaktai, #buhalteriai").hide();
    });

    $("#buh").click(function(){
      $("#buhalteriai").fadeIn(1500);
      $("#apie-mus, #paslaugos, #darbuotojai, #kontaktai-2, #auditoriai").hide();
    });
});
