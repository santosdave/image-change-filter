$(document).ready( function(){
    $(".hide").click( function(){
    $("img").css("opacity","0");
    $(".tv").css("border" , "0px");
   
});
$(".blur").click( function(){

$("img").css("filter" ,"blur(2px)");
$("img").css("opacity","1");

  
});
$(".bright").click( function(){

$("img").css("filter","brightness(120%)");
$("img").css("opacity","1");


});
$(".pink").click( function(){

$("img").css("opacity","1");

$("img").css("filter" , "hue-rotate(-40deg)");
  
});
$(".sepia").click( function(){
    
    $("img").css("filter" , "sepia(100%)");
    $("img").css("opacity","1");

 
});
$(".Black").click( function(){

$("img").css("opacity","1");

$("img").css("filter" , "grayscale(100%)");
  
});
$(".sat").click( function(){

$("img").css("opacity","1");

$("img").css("filter" ,"saturate(8)");
});
$(".contrast").click( function(){

$("img").css("opacity","1");

$("img").css("filter" ,"contrast(200%)");
});
});