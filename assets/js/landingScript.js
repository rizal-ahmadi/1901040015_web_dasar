$(document).ready(function(){
    console.log("READY");
    $(window).scroll(function(){
        var position = $(window).scrollTop();
        var navHeight = $("nav").height();
        if(position >= parseInt(navHeight) + 20){
            $("nav").addClass('bg-light');
            $("nav").addClass('normal');
            $("nav.landing a.navbar-brand, nav.landing div#navbarScroll ul li a").css('color', 'black');
        }
        else  {
            $("nav").removeClass('bg-light');
            $("nav").removeClass('normal');
            $("nav.landing a.navbar-brand, nav.landing div#navbarScroll ul li a").css('color', 'black');
        }  
    });
});