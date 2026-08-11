/* =========================================================
   WHITESTONE — MAIN JAVASCRIPT
   ========================================================= */


/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");


if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        const isOpen = navLinks.classList.contains("active");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

    });


    /* Close menu when a link is clicked */

    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}


/* =========================================================
   SCROLL REVEAL
   ========================================================= */

const revealSections = document.querySelectorAll(
    ".intro, .featured, .statement, .shop-cta"
);


const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealSections.forEach(section => {

    revealObserver.observe(section);

});


/* =========================================================
   NAVBAR BACKGROUND ON SCROLL
   ========================================================= */

const header = document.querySelector(".site-header");


window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* =========================================================
   SMOOTH ANCHOR SCROLLING
   ========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {

        const targetId = this.getAttribute("href");

        if (
            !targetId ||
            targetId === "#"
        ) return;


        const target = document.querySelector(targetId);

        if (!target) return;


        event.preventDefault();


        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


/* =========================================================
   PRODUCT IMAGE HOVER
   ========================================================= */

const productCards = document.querySelectorAll(".product-card");


productCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.classList.add("hovered");

    });


    card.addEventListener("mouseleave", () => {

        card.classList.remove("hovered");

    });

});


/* =========================================================
   PAGE LOADED
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    document.body.classList.add("loaded");

});
