"use strict";

let hamburger_menu = document.querySelector("#lines_container");

let menu = document.querySelector("#menu_content_container");

let close_icon = document.querySelector(".material-symbols-outlined.menu_close_icon");


hamburger_menu.addEventListener("click", ()=>menu.style.transform = "translateX(0)" );

close_icon.addEventListener("click", ()=>menu.style.transform = "translateX(-650px)");

