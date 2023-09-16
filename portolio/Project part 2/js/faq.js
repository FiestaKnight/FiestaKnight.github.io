"use strict";

const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    var image1 = $("#image1");
    var image2 = $("#image2");
    var image3 = $("#image3");

    // get photos
    var links = $("#image_list").querySelectorAll("a");

    for (let link of links) {
        const image = new Image();
        image.src = link.href;
    }

    // Two photos per section
    for ( let link of links) {
        image1.addEventListener("mouseover", () => {
            image1.src = "media/Delivery2.png";
        });
        image1.addEventListener("mouseout", () => {
            image1.src = "media/Delivery1.png";
        });
        image2.addEventListener("mouseover", () => {
            image2.src = "media/Dungeon2.png";
        });
        image2.addEventListener("mouseout", () => {
            image2.src = "media/Dungeon1_small.png";
        });    
        image3.addEventListener("mouseover", () => {
            image3.src = "media/Primal2.png";
        });
        image3.addEventListener("mouseout", () => {
            image3.src = "media/Primal1.png";
        });
          
    }

});