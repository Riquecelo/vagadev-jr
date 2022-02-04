var owl = $('.owl-carousel');

owl.owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  dots:false,
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

$("#bnt-anterior").on('click', function(){
    owl.trigger('prev.owl.carousel');
});
$("#btn-proximo").on('click', function(){
    owl.trigger('next.owl.carousel');
})