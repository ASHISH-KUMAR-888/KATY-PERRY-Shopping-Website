"use strict";

import {dropdown_function} from "../modules/dropdown_function.js";

let collection_title = document.querySelector("#collection_title_icon_container");

let merch_title = document.querySelector("#merch_title_icon_container");

let music_title = document.querySelector("#music_title_icon_container");



let dropdown1 = document.querySelector("#collection_dropdown_container");

let dropdown2 = document.querySelector("#merch_dropdown_container");

let dropdown3 = document.querySelector("#music_dropdown_container");



collection_title.addEventListener("click",dropdown_function.bind(null,dropdown1,"dropdown_container_one"));


merch_title.addEventListener("click", dropdown_function.bind(null,dropdown2, "dropdown_container_two"));


music_title.addEventListener("click", dropdown_function.bind(null,dropdown3, "dropdown_container_three"));
