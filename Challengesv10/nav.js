const primaryNav = document.querySelector('.navigation');
const navToggle = document.querySelector('.mobile-toggle');

navToggle.addEventListener("click", () => {
    const visiblity = primaryNav.getAttribute('data-visible');

    if (visiblity === "false") {
        primaryNav.setAttribute("data-visible", true); 
        navToggle.setAttribute('aria-expanded', true);
    } else if (visiblity === "true") {
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute('aria-expanded', false);
    }
})

