"use strict";

var input = document.querySelector(".input-button input");
var btn = document.querySelector(".input-button button");
var msg = document.querySelector(".input-button p");

btn.onclick = function () {
    if (mailRegex.test(input.value)) {
        msg.innerText = "We added you to our list";
    } else {
        msg.innerText = "Please enter valid e-mail";
    }
}

document.onkeydown = function(event) {
    event = event || window.event;
    if (event.keyCode == 27) {
        document.getElementById("user-mail").blur(); 
    }
    if (event.keyCode == 13) {
    	window.location.href = "2_category-all.html";
    }
};
