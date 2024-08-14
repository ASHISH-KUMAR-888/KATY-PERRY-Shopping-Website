"use strict";

import {dropdown_function} from "../modules/dropdown_function.js";

let collection_title = document.querySelector("#laptop_dropdown_one");

let merch_title = document.querySelector("#laptop_dropdown_two");

let music_title = document.querySelector("#laptop_dropdown_three");



let dropdown1 = document.querySelector("#laptop_dropdown_content_container_one");

let dropdown2 = document.querySelector("#laptop_dropdown_content_container_two");

let dropdown3 = document.querySelector("#laptop_dropdown_content_container_three");



collection_title.addEventListener("click",dropdown_function.bind(null,dropdown1,"laptop_dropdown_container_one"));


merch_title.addEventListener("click", dropdown_function.bind(null,dropdown2, "laptop_dropdown_container_two"));


music_title.addEventListener("click", dropdown_function.bind(null,dropdown3, "laptop_dropdown_container_three"));
