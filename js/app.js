
$(document).ready(function(){
  $('.slick_imgs').slick({
    adaptiveHeight: true,
    dots: true
  });
  $('.slick_projects').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: true,
    variableWidth: true
  });
});
