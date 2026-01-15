const menuButton = document.querySelector(".menu");
const navigationBar = document.querySelector("nav");
const closeMenu = document.querySelector(".close-menu");
const shadow = document.querySelector(".shadow");

menuButton.addEventListener("click", (event) => {
  navigationBar.style.left = "30%";
  shadow.style.opacity = 1;
  navigationBar.inert = false;
  closeMenu.focus();
});

closeMenu.addEventListener("click", (event) => {
  navigationBar.style.left = "100%";
  shadow.style.opacity = 0;
  navigationBar.inert = true;
  menuButton.focus();
});
