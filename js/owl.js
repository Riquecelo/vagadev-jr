var owl2 = $("#carousel2");

owl2.owlCarousel({
    items:1,
    loop: true,
    margin: 10,
    nav: true,
    center:true,
    responsive: {
        0: {
        items: 1
        },
        600: {
        items: 1
        },
        1000: {
        items: 2
        }
    }
});



var owl = $('.owl-carousel');

owl.owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  dots:false,
  mouseDrag:false,
  responsiveClass:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
});


$("#btn-anterior").on('click', function(){
    owl.trigger('prev.owl.carousel');
});
$("#btn-proximo").on('click', function(){
    owl.trigger('next.owl.carousel');
})