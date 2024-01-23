// var $ = jQuery.noConflict()
// $(window).scroll(function(){
//   var scroll = $(this).scrollTop()
//   $(".parallax").css({"background-position":"0px "+scroll/2+"px"})
// }) 

let pic1 = document.getElementById("firstimage");
let pic2 = document.getElementById("secondimage");
window.addEventListener('scroll', function() {
    var value = window.scrollY;
    pic1.style.top = value  * 0.5 + 'px';
    pic2.style.top = value  * 0.2 + 'px';
})