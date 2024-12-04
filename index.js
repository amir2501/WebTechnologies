// Select the elements to observe
const manElement = document.querySelector(".man");
const womanElement = document.querySelector(".woman");
const manListElement = document.querySelector("#man");
const womanListElement = document.querySelector("#woman");
const categories = document.querySelector("#categories");
const nav = document.querySelector("#nav");
const home = document.querySelector("#home");
const itemElement = document.querySelectorAll(".item");
const mobileNav = document.querySelector("#drop-down");
const hamburger = document.querySelector("#hamburger");

if (window.innerWidth > 1000) {
    mobileNav.style.display = 'none';
}

manElement.classList.add("hidden");
womanElement.classList.add("hidden");
manListElement.classList.add("list-hidden");
womanListElement.classList.add("list-hidden");

function handleIntersection(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Remove the 'hidden' class and add a 'slide-in' class for animation
            entry.target.classList.remove("hidden");
            entry.target.classList.add("slide-in");


            if (entry.target === womanListElement) {
                womanListElement.classList.remove("list-hidden");
                return womanListElement.classList.add("list-slide-in");
            }
            if (entry.target === manListElement) {
                manListElement.classList.remove("list-hidden");
                return manListElement.classList.add("list-slide-in");
            }
        }
    });
}

function handleIntersectionNav(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target === home) {
                return nav.classList.add("nav-hidden");
            }
            nav.classList.remove("nav-hidden");
            nav.classList.add("nav-slide-in");
        }
    });
}

const value = window.innerWidth < 1000 ? 0.2 : 0.5;

const options = {
    root: null,
    rootMargin: "0px",
    threshold: value,
};

const valueForList = window.innerWidth < 1000 ? 0.1 : 0.2;

const optionsForList = {
    root: null,
    rootMargin: "0px",
    threshold: valueForList,
};

const observer = new IntersectionObserver(handleIntersection, options);
const navObserver = new IntersectionObserver(handleIntersectionNav, options);
const listObserver = new IntersectionObserver(handleIntersection, optionsForList);
// Observe the elements
observer.observe(manElement);
observer.observe(womanElement);
navObserver.observe(categories);
navObserver.observe(home);
listObserver.observe(manListElement);
listObserver.observe(womanListElement);

womanElement.addEventListener('mouseover', (event) => {
    womanElement.style.backgroundImage = "url(\"./kendall.jpeg\")"
})

womanElement.addEventListener('mouseout', (event) => {
    womanElement.style.backgroundImage = "url(\"./kendall-main.jpeg\")"
})

manElement.addEventListener('mouseover', (event) => {
    manElement.style.backgroundImage = "url(\"jony-dep.jpeg\")"
})

manElement.addEventListener('mouseout', (event) => {
    manElement.style.backgroundImage = "url(\"./jony-dep-young.jpeg\")"
})


itemElement.forEach(li => {
    li.addEventListener('mouseover', () => {
        const img = li.querySelector('img');
        const h3 = li.querySelector('h3');
        if (img) {
            img.classList.remove('grayscale'); // Replace 'grayscale' with your class name
        }
        if (h3) {
            h3.style.color = "#303030";
            h3.style.fontStyle = "italic"
            li.style.backgroundColor = "#c3c3c3";
        }
    });
    li.addEventListener('mouseout', () => {
        const h3 = li.querySelector('h3');
        const img = li.querySelector('img');
        if (img) {
            img.classList.add('grayscale'); // Replace 'grayscale' with your class name
        }

        if (h3) {
            h3.style.color = "#d2d2d2";
            h3.style.fontStyle = "normal"
            li.style.backgroundColor = "#8e8e8e";
        }
    });
});

function redirectTo(hash) {
    window.location.hash = '/';
    window.location.hash = hash;
}

womanElement.addEventListener('click', () => {
    redirectTo("#woman")
});
manElement.addEventListener('click', () => {
    redirectTo("#man")
});


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

