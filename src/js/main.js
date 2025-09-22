/* Your JS here. */

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
});