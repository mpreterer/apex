

$(document).ready(function(){
    $(".menu-burger__header span").click(function(){
    $("ul.burger__menu-list").toggle(700);
    $(".burger_connect").animate({display:'block;'});
    $(".burger_connect_img").animate({display:'block'});
    $(".header__connect_burger").animate({display:'block'});
});
});


