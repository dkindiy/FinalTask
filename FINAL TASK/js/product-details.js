"use strict";

var mainThumb = document.getElementById("main-thumb-img");
var thumbs = document.querySelectorAll(".thumbnail img");

for (let i = 0; i < thumbs.length; i++) {
    thumbs[i].onclick = function() {
        let temp = mainThumb.src;
        mainThumb.src = thumbs[i].src;
        thumbs[i].src = temp;
        mainThumb.style.opacity = 0.3;
        let op = 0.3;
        let timer = setInterval(function() {
            if (op >= 1) {
                clearInterval(timer);
            }
            mainThumb.style.opacity = op;
            op += 0.01;
        }, 5);
    }
}

document.querySelector(".item button").onclick = function() {
    this.style.backgroundColor = "green";
    this.innerHTML = "PRODUCT ADDED";
    document.querySelector(".menu-basket span").innerHTML = "Basket (4)";
}