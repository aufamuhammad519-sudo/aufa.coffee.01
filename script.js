const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const navMenu = document.querySelector(".nav-menu");

if (menuOpenButton) {
    menuOpenButton.addEventListener("click", () => {
        navMenu.classList.add("show-mobile-menu");
    });
}

if (menuCloseButton) {
    menuCloseButton.addEventListener("click", () => {
        navMenu.classList.remove("show-mobile-menu");
    });
}

const navLinks = document.querySelectorAll(".nav-menu .nav-link");
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("show-mobile-menu");
    });
});

