"use strict";

const initializeNavBav = () => {
    changeNavBar(0);
}

const changeNavBar = (index) => {
    if (index >=0 && index < 3) {
        const li_elements = document.getElementById("menu-ul").children;
        for ( let element of li_elements ) {
            element.classList.remove("active");
        }
        li_elements[index].classList.add("active");
    }
}