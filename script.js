const hamburger = document.getElementById('hamburger');
    const navList = document.getElementById('navList');

    hamburger.addEventListener('click', () => {
      navList.classList.toggle('active');
    });

document.addEventListener("DOMContentLoaded", () => {
    const navItems = document.querySelectorAll(".nav-items");
    const sections = document.querySelectorAll("section");


    const activateNav = () => {
        let current = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navItems.forEach((item) => {
            const link = item.querySelector("a");
            item.classList.remove("active");
            link.classList.remove("active");

            if (link.getAttribute("href").includes(current)) {
                item.classList.add("active");
                link.classList.add("active");
            }
        });
    };


    window.addEventListener("scroll", activateNav);
    activateNav();
});


