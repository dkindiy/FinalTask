"use strict";

var searchInput = document.getElementById("search-input");
var searchIconDiv = document.getElementById("search-icon-div");
var searchIcon = document.getElementById("search-icon");
var menuItems = document.getElementsByClassName("menu-items")[0];
var mainHeader = document.getElementsByTagName("header")[0];
var mailRegex = RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9]?)$");


searchIconDiv.onclick = function () {
    if (searchIconDiv.getAttribute("class") == "icon-move") {
        searchIconDiv.setAttribute("class", "icon");
        searchIcon.setAttribute("src", "img/search-icon.png");
        searchInput.style.display = "none";

        searchInput.dataset.expanded = true;
        if (searchInput.dataset.expanded) {
            if (searchInput.value) {
                window.location.href = "3_product-details.html";
            }
        }

        if (window.innerWidth < 768) {
            menuItems.style.marginTop = "auto";
            mainHeader.style.marginTop = "250px";
        }
    } else if (searchIconDiv.getAttribute("class") == "icon") {
        searchIconDiv.setAttribute("class", "icon-move");
        searchIcon.setAttribute("src", "img/grey-search-icon.png");
        searchInput.style.display = "inline-block";
        searchInput.dataset.expanded = false;

        if (window.innerWidth < 768) {
            menuItems.style.marginTop = "60px";
            mainHeader.style.marginTop = "321px";
        }
    }
}
