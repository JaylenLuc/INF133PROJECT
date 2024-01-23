// var $ = jQuery.noConflict()
// $(window).scroll(function(){
//   var scroll = $(this).scrollTop()
//   $(".parallax").css({"background-position":"0px "+scroll/2+"px"})
// }) 

let pic1 = document.getElementById("firstimage");
let pic2 = document.getElementById("secondimage");
let pic3 = document.getElementById("thirdimage");
// let t1 = document.getElementById("firsttab");
// let t2 = document.getElementById("secondtab");
window.addEventListener('scroll', function() {
    var value = window.scrollY;
    pic1.style.top = value  * 0.8 + 'px';
    pic2.style.top = value  * 0.5 + 'px';
    pic3.style.top = value * 0.9 + 'px';
    // // t1.style.top = value * 0.8 + 'px';
    // t2.style.top = value * 0.9 + 'px';
})