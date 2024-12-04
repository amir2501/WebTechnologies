const nav = document.querySelector("#nav");
const hamburger = document.querySelector("#hamburger");
const mobileNav = document.querySelector("#drop-down");
const itemElement = document.querySelectorAll(".item");

if (window.innerWidth < 1000) {

    mobileNav.addEventListener('click', function () {
        if (mobileNav.classList.contains("overlay")) {
            mobileNav.classList.toggle("overlay");
            mobileNav.classList.toggle("hidden");
        }
    })
    hamburger.addEventListener("click", function (e) {
        mobileNav.classList.toggle("overlay");
        mobileNav.classList.toggle("hidden");
    })
}


if (window.innerWidth > 1000) {
    mobileNav.style.display = 'none';
}