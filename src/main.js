"use strict";

window.onload = init;

function init() {
    let acc = document.getElementsByClassName("accordion");

    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", (e) => {
            /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
            e.target.classList.toggle("active");

            /* Toggle between hiding and showing the active panel */
            let panel = e.target.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }

    // Open an accordion if its corresponding anchor tag is supplied in the URL.
    let url = window.location.href;
    let anchor = url.split('#')[1];
    anchor = anchor ? '#' + anchor : undefined;
    if (anchor) {
        let accordion = document.querySelector(anchor);
        if (accordion) {
            accordion.classList.add("active");
            document.querySelector(`${anchor}-panel`).style.display = "block";
        }
    }
};
