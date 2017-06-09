var slider = [
  { name: "Winter Warehouse", image: "images/winter-warehouse.png", url:"https://daniellehawn.github.io/html200-ecomm/"},
  { name: "Kitties to Go", image: "images/kitties.png", url:"https://daniellehawn.github.io/week04-practice"},
  { name: "Favorite Football Team", image: "images/football.png", url:"https://daniellehawn.github.io/local-storage/"}
];

$(document).ready(function(){  
  for(var i=0 ; i< slider.length ; i++) {
    $('<div class="item"><a href="'+slider[i].url+'"><img src="'+slider[i].image+'" alt="'+slider[i].name+'"></a></div>').appendTo('.carousel-inner');
    $('<li data-target="#myCarousel" data-slide-to="'+i+'"></li>').appendTo('.carousel-indicators')

  }
  $('.item').first().addClass('active');
  $('.carousel-indicators > li').first().addClass('active');
  $('#myCarousel').carousel();
});



