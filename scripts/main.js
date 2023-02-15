let liElemMobileMenu = document.getElementsByClassName("nav-link");

for (const key of liElemMobileMenu) {
  key.addEventListener("click", function () {
    key.parentElement.parentElement.parentElement.classList.remove("show");
  });
}
