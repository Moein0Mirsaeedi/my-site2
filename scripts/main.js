let $$ = document;
let liElemMobileMenu = document.getElementsByClassName("nav-link");
let navbar = document.getElementById("navbar");
for (const key of liElemMobileMenu) {
  key.addEventListener("click", function () {
    key.parentElement.parentElement.parentElement.classList.remove("show");
  });
}

window.addEventListener("scroll", checkScroll);

function checkScroll() {
  if (window.pageYOffset > 1) {
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
}

checkScroll();

// change language

let languages = [
  {
    menuItem: ["خانه", "درباره من", "خدمات", "مهارت ها", "ارتباط با من"],
    homePage: [
      "معین میرسعیدی",
      `برنامه نویس ، طراح وب <br />
                طراح گرافیک و... <br />
                <span>تماس: 09056249543</span>`,
    ],
  },
  {
    menuItem: ["Home", "About me", "My service", "My skills", "Contact me"],
    homePage: [
      "Moein Mirsaeedi",
      "Programmer , Web designer, <br>Graphic designer and...",
      "call: 09056249543",
    ],
  },
];

let btnChangeLan = document.getElementsByClassName("changeLan");
let navItem = document.getElementsByClassName("nav-link");
let languageSite = "EN";

for (const key of btnChangeLan) {
  key.addEventListener("click", function () {
    if (languageSite === "EN") {
      changeToFA();
    } else if (languageSite === "FA") {
      changeToEN();
    }
  });
}

// Change language to FA
function changeToFA() {
  languageSite = "FA";
  $$.querySelector("#changeLan").innerHTML = "EN";

  // menu change
  document.body.style.direction = "rtl";
  for (const key in navItem) {
    navItem[key].innerHTML = languages[0].menuItem[key];
  }
  $$.querySelector(".navbar-brand").classList.add("ms-4");
  $$.querySelector("#changeLan").classList.remove("ms-auto");
  $$.querySelector("#changeLan").classList.add("me-auto");
  $$.querySelector("#changeLan").classList.add("ms-2");

  // home page change
  $$.querySelector(".home-name").innerHTML = languages[0].homePage[0];
  $$.querySelector(".home-about-me").innerHTML = languages[0].homePage[1];
}

// Change language to EN
function changeToEN() {
  languageSite = "EN";
  $$.querySelector("#changeLan").innerHTML = "FA";

  // menu change
  document.body.style.direction = "ltr";
  for (const key in navItem) {
    navItem[key].innerHTML = languages[1].menuItem[key];
  }
  $$.querySelector(".navbar-brand").classList.add("ms-4");
  $$.querySelector("#changeLan").classList.add("ms-auto");
  $$.querySelector("#changeLan").classList.remove("me-auto");
  $$.querySelector("#changeLan").classList.remove("ms-2");

  // home page change
  $$.querySelector(".home-name").innerHTML = languages[1].homePage[0];
  $$.querySelector(".home-about-me").innerHTML = languages[1].homePage[1];
}
