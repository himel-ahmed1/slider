$(function () {
    $('a').on('click',function (event) {
        event.preventDefault
        if(this.hash !==''){
            
            $('html,body').animate({
                scrollTop: $(this.hash).offset().top
            },1500)

        }

    })



    $(window).on('scroll',function () {

       if( $(this).scrollTop() > 350){

           $('#back-to-top').fadeIn(700)

       } else{

           $('#back-to-top').fadeOut(700)

       }
    })

    $('#back-to-top').on('click',function () {

        $('html,body').animate({
            scrollTop: 0,
        },800)
        
    })
    
    $(window).on('load',function () {
        $('.preloader').fadeOut(900)   
   })

   $(window).on('scroll', function () {
       
    if($(window).scrollTop() > $('nav').height()){

        $('nav').addClass('menu-animate')
    }
    else($('nav').removeClass('menu-animate'))
   })
   $('.banner-slider').slick({
       prevArrow:'<i class="banner-slider-icon fas fa-arrow-left"></i>',
       nextArrow:'<i class="banner-slider-icon fas fa-arrow-right"></i>',
       dots: true,
       dotsClass:'dots',
       fade: true,
       autoplay: true,
       autoplayspeed:4000,
       speed:2000,
   })
    

})

// $(window).on('load',function () {
//      $('.preloader').fadeOut(700)   
// })