"use strict";

(function (arr) {
    arr.forEach(function (item) {
        if (item.hasOwnProperty('remove')) {
            return;
        }
        Object.defineProperty(item, 'remove', {
            configurable: true,
            enumerable: true,
            writable: true,
            value: function remove() {
                if (this.parentNode === null) {
                    return;
                }
                this.parentNode.removeChild(this);
            }
        });
    });
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);


var arrowUp = document.getElementsByClassName("arrow-up");
var arrowDown = document.getElementsByClassName("arrow-down");
var inputs = document.getElementsByClassName("qty-input");

function recountCart() {
    for (let i = 0; i < inputs.length; i++) {
        arrowUp[i].onclick = function () {
            inputs[i].value++;
            let sum = 0;
            for (let j = 0; j < inputs.length; j++) {
                sum += +inputs[j].value;
            }
            document.querySelector(".menu-basket span").innerHTML = "Basket (" + sum + ")";
        }
        arrowDown[i].onclick = function () {
            if (inputs[i].value > 1) {
                inputs[i].value--;
                let sum = 0;
                for (let j = 0; j < inputs.length; j++) {
                    sum += +inputs[j].value;
                }
                document.querySelector(".menu-basket span").innerHTML = "Basket (" + sum + ")";
            }
        }
    }
}
recountCart();

var cart = document.querySelector(".cart");
cart.addEventListener("click", function (event) {
    var target = event.target;
    if (target.className == "times-span") {
        while (target.className != "cart-item") {
            target = target.parentNode;
        }
        target.remove();

        inputs = document.getElementsByClassName("qty-input");
        arrowUp = document.getElementsByClassName("arrow-up");
        arrowDown = document.getElementsByClassName("arrow-down");
        recountCart();
        let sum = 0;
        for (let j = 0; j < inputs.length; j++) {
            sum += +inputs[j].value;
        }
        document.querySelector(".menu-basket span").innerHTML = "Basket (" + sum + ")";
    }
});

