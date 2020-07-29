$(document).ready(function() {
    $("#init").hide();
    $("#init").fadeIn(3000);
    var initH = $('#top').height();
    //console.log(initH);
    $(window).scroll(function () {
        if ($(this).scrollTop() >= initH) {
         $(".navbar").addClass("navbarfundo");
        } else {
         $(".navbar").removeClass("navbarfundo");
        }
      });
});

$('.skills-cards ul').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  variableWidth: true,
  responsive: [
    {
     breakpoint: 992,
     settings: {
      centerMode: true
     }
  }
]
  
});

const large = $(window).width();

if(large < 992) {
  // console.log("émenor")
  initMobile();
}

function initMobile(){

$('#top').prepend(`
        <span class="toggle-menu">
            <span class="line line-1"></span>
            <span class="line line-2"></span>
            <span class="line line-3"></span>
        </span>
   `);

   $('.toggle-menu').click(function(){
    $('.toggle-menu').toggleClass('active', 500, "easeOutSine");
    $('.navbar').toggleClass('active', 500, "easeOutSine");
    $('.box-shadow').fadeToggle();
    // $('body').toggleClass('menu-open');
})

}