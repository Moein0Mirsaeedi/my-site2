let liElemMobileMenu = document.getElementsByClassName("nav-link");
let navbar = document.getElementById("navbar");
for (const key of liElemMobileMenu) {
  key.addEventListener("click", function () {
    key.parentElement.parentElement.parentElement.classList.remove("show");
  });
}

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 0) {
    navbar.classList.add("scrollthis");
    navbar.classList.add("navbar-light");
    navbar.classList.remove("navbar-dark");
    navbar.classList.add("p-0");
    navbar.classList.add("p-lg-1");
    navbar.classList.remove("p-lg-4");
  } else {
    navbar.classList.remove("scrollthis");
    navbar.classList.remove("navbar-light");
    navbar.classList.add("navbar-dark");
    navbar.classList.remove("p-0");
    navbar.classList.add("p-lg-4");
    navbar.classList.remove("p-lg-1");
  }
});
