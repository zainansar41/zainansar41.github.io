$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");

        }

        if(this.scrollY>500){
            $('.scroll').addClass("show")
        }else{
            $('.scroll').removeClass("show")
        }
    });

    $('.scroll').click(function(){
        $('html').animate({scrollTop: 0});
    });


    // typing animation
    var typed=new Typed(".typing",{
        strings: ["Web developer", "blogger", "App designer", "Free Lancer"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });
    var typed=new Typed(".typing-2",{
        strings: ["Web developer", "blogger", "App designer", "Free Lancer"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });

    // toggle menu
    $('.menu-btn').click(function(){
        $('.navbar ul').toggleClass("active");
        $('.menu-btn i').toggleClass("active");

    })
})