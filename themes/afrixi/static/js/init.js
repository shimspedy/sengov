$(document).ready(function() {
     $('.scrollspy').scrollSpy();
     $(".left-col-article").css("height", $(".left-col-article").parent().height());
     $(".right-col-article").css("height", $(".right-col-article").parent().height());
     $("#nav-side-single").stick_in_parent({
          offset_top:80
     });
     $("#nav-side-ad").stick_in_parent({
      offset_top:600
     });
     $("#nav-side-article").stick_in_parent({
          offset_top:80
     });
     $("#social-icons-horizontal").stick_in_parent({
          offset_top:$(window).height() -70,
          spacer: false,
     });
     
    $('.sidenav').sidenav();

    $(".dropdown-trigger").dropdown();
    
    //homepage cards
$(document).ready(function() {
   
     $(".option").click(function () {
         $(".option").removeClass("active");
         $(this).addClass("active");
     });
     
      
  });
     
});


