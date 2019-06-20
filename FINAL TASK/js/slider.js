"use strict";

var leftSlide = document.getElementById("left-slide-btn");
var rightSlide = document.getElementById("right-slide-btn");

rightSlide.onclick = function() {
    document.getElementsByClassName("slider-content")[0].scrollLeft += 200;
}
leftSlide.onclick = function() {
    document.getElementsByClassName("slider-content")[0].scrollLeft -= 200;
}