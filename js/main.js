$(document).ready(function () {
    $(".customers-stars").starRating({
        initialRating: 5,
        strokeColor: '#F1B90B',
        rateColor: '#F1B90B',
        starSize: 23,
        readOnly:true,
        strokeWidth: 25,
      });
      //slider
      $(".customers-slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:'<button class="btn slider-btn slider-prev"></tn>',
        nextArrow:'<button class="btn slider-btn slider-next active"></tn>',
        responsive:[
          {
            breakpoint: 981,
            settings: {
            arrows: false,
              dots: true
            }
          },
        ]
        
      });
      $('.slider-btn').click(function(){
        $('.slider-btn').removeClass("active");
        $(this).addClass("active")
      });
      $(".burger").click(function(){
        $(".burger").toggleClass('active')
        $(".nav").toggleClass('active')
        $("body").toggleClass('hidden')
      })


    
});


