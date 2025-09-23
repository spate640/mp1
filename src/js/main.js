/* Your JS here. */

// Shrinking navbar
let navbar = document.querySelector(".navbar");
let isShrunk = false;

window.addEventListener("scroll", () => {
    let y = window.scrollY;
    if (!isShrunk && y > 80) {
      navbar.classList.add('shrink');
      isShrunk = true;
    } else if (isShrunk && y < 20) {
      navbar.classList.remove('shrink');
      isShrunk = false;
    }

    updateActiveSection();
});


// Dark outline when in section
const navbarLinks = Array.from(document.querySelectorAll(".navbar a"));
const sections = navbarLinks
    .map(a => document.querySelector(a.getAttribute("href")));

function updateActiveSection() {
    const navBottom = navbar.getBoundingClientRect().bottom;

    let currentSect = sections.find(sect => {
        let box = sect.getBoundingClientRect();
        return box.top <= navBottom && box.bottom > navBottom;
    });

    navbarLinks.forEach(link => {
        link.classList.remove("active");
    });

    if(currentSect) {
        let sectId = '#' + currentSect.id;
        navbarLinks.forEach(link => {
            if(link.getAttribute("href") === sectId)
                link.classList.add("active");
        })
    }
}

    // Run on first load
window.addEventListener("DOMContentLoaded", updateActiveSection);



