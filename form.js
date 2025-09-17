$(document).ready(function () {
    // Sticky header logic
    $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
        $("header").addClass("sticky");
      } else {
        $("header").removeClass("sticky");
      }
    });
  
    // Dynamic year update
    const newDate = () => new Date().getFullYear();
    $("#autodate").text(newDate());
  });
  