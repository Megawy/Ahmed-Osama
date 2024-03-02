// Start Navbar
// Navbar on scrolling
let navbar = document.querySelector(".navbar");
let scroll_to_top = document.querySelector(".back-to-top");
window.onscroll = function shownavbar() {
  if (window.scrollY > 200) {
    navbar.style.transitionDuration = "0.7s";
    navbar.style.transitionTimingFunction = "liner";
    navbar.style.transitionProperty = "all";
    navbar.style.opacity = "1";
    navbar.style.userSelect = "auto";
    navbar.style.transform = "translateY(0%)";
    // Scroll To Top
    scroll_to_top.style.transitionDuration = "0.7s";
    scroll_to_top.style.transitionTimingFunction = "liner";
    scroll_to_top.style.transitionProperty = "all";
    scroll_to_top.style.opacity = "1";
  } else {
    navbar.style.transitionDuration = "0.7s";
    navbar.style.transitionTimingFunction = "liner";
    navbar.style.transitionProperty = "all";
    navbar.style.opacity = "0";
    navbar.style.userSelect = "none";
    navbar.style.transform = "translateY(-100%)";
    // Scroll To Top
    scroll_to_top.style.transitionDuration = "0.7s";
    scroll_to_top.style.transitionTimingFunction = "liner";
    scroll_to_top.style.transitionProperty = "all";
    scroll_to_top.style.opacity = "0";
  }
};
// End Navbar
// Start Alert
let alert = document.querySelector(".alert");
window.onload = function () {
  alert.style.userSelect = "none";
  alert.style.transitionDuration = "0.7s";
  alert.style.transitionTimingFunction = "ease-in";
  alert.style.opacity = "0.9";
  alert.style.transform = "translatex(0%)";
  function hide_alert() {
    alert.style.transitionDuration = "0.7s";
    alert.style.transitionTimingFunction = "ease-out";
    alert.style.userSelect = "none";
    alert.style.transform = "translatex(100%)";
    alert.style.opacity = "0";
  }
  setTimeout(hide_alert, 3500);
};
// End Alert
