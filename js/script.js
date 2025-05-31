const year = document.querySelector(".footer-year");
const currentYear = new Date().getFullYear();
year.textContent = currentYear;

const btnNav = document.querySelector(".btn-mobile-toggle");
const header = document.querySelector(".header");

const sectionHero = document.querySelector(".section-hero");
const allLinks = document.querySelectorAll("a:link");


btnNav.addEventListener('click', function () {
    header.classList.toggle("nav-open");
})

allLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        const href = link.getAttribute("href");

        if (href === "#") {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }

        if (href !== "#" && href.startsWith("#")) {
            const section = document.querySelector(href);
            section.scrollIntoView({behavior: "smooth"});
        }

        if (link.classList.contains("main-nav-link")){
            header.classList.toggle("nav-open");
        }
    })
})


const observer = new IntersectionObserver(function (entries){
    const ent = entries[0];
    if (!ent.isIntersecting){
        document.body.classList.add("sticky");
    }

    if (ent.isIntersecting){
        document.body.classList.remove("sticky");
    }

}, {
    // Null refers to the view port
    root:null,
    threshold: 0,
    rootMargin: "-80px"
})
observer.observe(sectionHero)
