let $$ = document;
let liElemMobileMenu = document.getElementsByClassName("nav-link");
let navbar = document.getElementById("navbar");

// add event for click item navbar
for (const key of liElemMobileMenu) {
  key.addEventListener("click", function () {
    key.parentElement.parentElement.parentElement.classList.remove("show");
  });
}

window.addEventListener("scroll", checkScroll);

// add style for scroll page
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
    aboutPage: [
      `<h2 class="about-title">درباره من</h2>
              <br /><br />
              <p class="about-text">
               دو سال که در زمینه <span>طراحی وب</span> و
                <span>برنامه نویسی</span> وب کار می کنم.
                <br />
                و به زبان های <span>Html</span> , <span>Css</span> و
                <span>JavaScript</span> مسلطم.
                <br />
                همچنین به فناوری های دیگه مثل <span>Bootstrap</span> ,
                <span>Git</span> و <span>Sass</span> هم مسلطم.
                <br />
                مسلط به کار های <span>گرافیکی</span> و <span>ادیت</span>.
                <br />
    
              

                مشاهده
    
                <a
                  href="https://github.com/Moein0Mirsaeedi"
                  class="btn btn-outline-warning"
                  role="button"
                  >گیت هاب</a
                >
    
                <br /><br />
    
                در حال حاضر در دو رشته <span>کلیستنیکس</span> و
                <span>کیکبوکسینگ</span> <br> فعالیت دارم
                <br />
                مشاهده

                <a
                  href="https://instagram.com/moein_mirsaeedi"
                  class="btn btn-outline-warning"
                  role="button"
                  >اینستاگرام</a
                >`,
    ],
    servicePage: [
      `<h2 class="service-title">خدمات</h2>
              <br /><br /><br />
              <div class="row border-left-1 mb-5">
                <div class="col col-12 col-md-6 service-text">
                  <span>
                    طراحی انواع وبسایت
                    <br />
                    پروژه های برنامه نویسی
                    <br />
                    <hr />
                    تبلیغات و سئو
                    <br />
                    کار های گرافیکی
                    <br />
                    ادیت ویدیو و تصاویر
                    <br />
                    <hr />
                    آموزش برنامه نویسی و طراحی وب
                    <br />
                    آموزش مباحث کامپیوتر
                  </span>
                </div>
                <div class="col col-12 col-md-6 service-text border-left">
                  <p>مشکلات سخت افزاری و نرم افزار</p>
                </div>
              </div>`,
    ],
    skillsPage: [
      `
    <h2 class="skills-title"><span>مهارت ها</h2>
              <br /><br />
              <div class="row border-left-1 padding-left">
                <div class="col col-12 col-md-6 skills-text">
                  <span>
                    <span class="i">طراحی وب</span>
                    <div class="progress">
                      <div
                        class="progress-bar progress-bar-warning"
                        role="progressbar"
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style="width: 90%"
                      >
                        90%
                      </div>
                    </div>
                    Html, Css
                    <br />
                    Bootstrap , Sass
                    <br />

                    <hr />

                    <span class="i">برنامه نویسی</span>
                    <div class="progress">
                      <div
                        class="progress-bar progress-bar-warning"
                        role="progressbar"
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style="width: 50%"
                      >
                        50%
                      </div>
                    </div>

                    JavaScript
                    <br />
                    JQuery
                    <br />

                    <hr />

                    <span class="i">مهارت های عمومی</span>
                    <div class="progress">
                      <div
                        class="progress-bar progress-bar-warning"
                        role="progressbar"
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style="width: 90%"
                      >
                        90%
                      </div>
                    </div>

                    Git , Github
                    <br />

                    <hr />
                  </span>
                </div>
                <div
                  class="col col-12 col-md-6 skills-text border-left padding-left-1"
                >
                  <span>
                    <span class="i">ادیت</span>
                    <div class="progress">
                      <div
                        class="progress-bar progress-bar-warning"
                        role="progressbar"
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style="width: 50%"
                      >
                        50%
                      </div>
                    </div>

                    Photoshop
                    <br />
                    Pixellab
                    <br />
                    Figma
                    <br />

                    <hr />
                  </span>
                </div>
              </div>`,
    ],
    contactPage: [
      `<h2 class="contact-title">ارتباط با من</h2>
              <br /><br />
              <div class="row border-left-1">
                <div class="col col-12 col-md-6 contact-text">
                  <br />
                  <span>
                    تماس: 09056249543
                    <hr />
                    ایمیل: MoeinGIR@moeing.ir
                    <hr />
                    شبکه های مجازی: MoeingIR
                    <hr />
                    گیت هاب: Moein0Mirsaeedi
                    <hr />
                    وبسایت: Moeing.ir
                  </span>
                  <br /><br /><br />
                </div>
                <div
                  class="col col-12 col-md-6 service-text border-left d-flex align-items-center"
                >
                  <a class="download-cart" href="images/CartInfoM.png" download>
                    <img
                      class="w-100"
                      src="images/CartInfoM.png"
                      alt="Moein Mirsaeedi | معین میرسعیدی"
                    />
                    <p class="text-center text-light">Click for download</p>
                  </a>
                </div>
              </div>`,
    ],
  },
  {
    menuItem: ["Home", "About me", "My service", "My skills", "Contact me"],
    homePage: [
      "Moein Mirsaeedi",
      "Programmer , Web designer, <br>Graphic designer and...",
      "call: 09056249543",
    ],
    aboutPage: [
      `<h2 class="about-title">About <span>me</span></h2>
              <br /><br />
              <p class="about-text">
                My name is <span>Moein</span> <br /><br />
                I have been working in <span>web design</span> and
                <span>programming</span> for two years. <br />
                I am fluent in
                <span>Html</span>, <span>CSS</span> and
                <span>JavaScript</span> languages. <br />
                I am also proficient in other technologies such as
                <span>Bootstrap</span>, <span>Git</span>, <span>Sass</span>.
                <br />
                Proficient in <span>graphics</span> and
                <span>editing</span>.<br />

                see my

                <a
                  href="https://github.com/Moein0Mirsaeedi"
                  class="btn btn-outline-warning"
                  role="button"
                  >Github</a
                >

                <br /><br />

                My sport are <span>Calisthenics</span> and
                <span>kickboxing</span>
                <br />
                see my

                <a
                  href="https://instagram.com/moein_mirsaeedi"
                  class="btn btn-outline-warning"
                  role="button"
                  >instagram</a
                >`,
    ],
    servicePage: [
      `<h2 class="service-title"><span>My</span> service</h2>
              <br /><br /><br />
              <div class="row border-left-1 mb-5">
                <div class="col col-12 col-md-6 service-text">
                  <span>
                    Designing all types of site.
                    <br />
                    Programming projects.
                    <br />
                    <hr />
                    advertising and SEO.
                    <br />
                    Doing graphic work.
                    <br />
                    Video and photo editing.
                    <br />
                    <hr />
                    Teaching programming , web designing.
                    <br />
                    Teaching computer concepts.
                  </span>
                </div>
                <div class="col col-12 col-md-6 service-text border-left">
                  <p>Software and hardware problems.</p>
                </div>
              </div>`,
    ],
    skillsPage: [
      `
    <h2 class="skills-title"><span>My</span> skills</h2>
              <br /><br />
              <div class="row border-left-1 padding-left">
                <div class="col col-12 col-md-6 skills-text">
                  <span>
                    <span class="i">Web design</span>
                    <div class="progress">
                      <div
                        class="progress-bar progress-bar-warning"
                        role="progressbar"
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style="width: 90%"
                      >
                        90% Complete
                      </div>
                    </div>
                    Html, Css
                    <br />
                    Bootstrap , Sass
                    <br />

                    <hr />

                    <span class="i">Programming</span>
                    <div class="progress">
                      <div
                        class="progress-bar progress-bar-warning"
                        role="progressbar"
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style="width: 50%"
                      >
                        50% Complete
                      </div>
                    </div>

                    JavaScript
                    <br />
                    JQuery
                    <br />

                    <hr />

                    <span class="i">General skills</span>
                    <div class="progress">
                      <div
                        class="progress-bar progress-bar-warning"
                        role="progressbar"
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style="width: 90%"
                      >
                        90% Complete
                      </div>
                    </div>

                    Git , Github
                    <br />

                    <hr />
                  </span>
                </div>
                <div
                  class="col col-12 col-md-6 skills-text border-left padding-left-1"
                >
                  <span>
                    <span class="i">Editing</span>
                    <div class="progress">
                      <div
                        class="progress-bar progress-bar-warning"
                        role="progressbar"
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style="width: 50%"
                      >
                        50% Complete
                      </div>
                    </div>

                    Photoshop
                    <br />
                    Pixellab
                    <br />
                    Figma
                    <br />

                    <hr />
                  </span>
                </div>
              </div>`,
    ],
    contactPage: [
      `<h2 class="contact-title">Contact <span>me</span></h2>
              <br /><br />
              <div class="row border-left-1">
                <div class="col col-12 col-md-6 contact-text">
                  <br />
                  <span>
                    Phone: 09056249543
                    <hr />
                    Email: MoeinGIR@moeing.ir
                    <hr />
                    Social media: MoeingIR
                    <hr />
                    Github: Moein0Mirsaeedi
                    <hr />
                    Website: Moeing.ir
                  </span>
                  <br /><br /><br />
                </div>
                <div
                  class="col col-12 col-md-6 service-text border-left d-flex align-items-center"
                >
                  <a class="download-cart" href="images/CartInfoM.png" download>
                    <img
                      class="w-100"
                      src="images/CartInfoM.png"
                      alt="Moein Mirsaeedi | معین میرسعیدی"
                    />
                    <p class="text-center text-light">Click for download</p>
                  </a>
                </div>
              </div>`,
    ],
  },
];

let btnChangeLan = document.getElementsByClassName("changeLan");
let navItem = document.getElementsByClassName("nav-link");
let languageSite = "EN";

// change language for load site
let isLanLocal = localStorage.getItem("LA");
if (isLanLocal != null) {
  languageSite = isLanLocal;
  if (languageSite === "FA") {
    changeToFA();
  } else if (languageSite === "EN") {
    changeToEN();
  }
}

// event change language for btn
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
  $$.querySelector(".changeLan1").innerHTML = "EN";
  $$.querySelector(".changeLan2").innerHTML = "EN";
  localStorage.setItem("LA", "FA");

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

  // about page change
  $$.querySelector(".about-lan-site").innerHTML = languages[0].aboutPage[0];

  // service page change
  $$.querySelector(".service-lan-site").innerHTML = languages[0].servicePage[0];
  $$.querySelector(
    ".service-lan-site"
  ).children[4].children[1].classList.remove("border-left");

  $$.querySelector(".service-lan-site").children[4].children[1].classList.add(
    "border-right"
  );

  $$.querySelector(".service-lan-site").children[4].classList.remove(
    "border-left-1"
  );

  $$.querySelector(".service-lan-site").children[4].classList.add(
    "border-right-1"
  );

  // skills page change
  $$.querySelector(".skills-lan-site").innerHTML = languages[0].skillsPage[0];
  $$.querySelector(".skills-lan-site").children[3].children[1].classList.remove(
    "border-left"
  );
  $$.querySelector(".skills-lan-site").children[3].children[1].classList.add(
    "border-right"
  );
  $$.querySelector(".skills-lan-site").children[3].classList.remove(
    "border-left-1"
  );
  $$.querySelector(".skills-lan-site").children[3].classList.add(
    "border-right-1"
  );

  // contact page change
  $$.querySelector(".contact-lan-site").innerHTML = languages[0].contactPage[0];
  $$.querySelector(
    ".contact-lan-site"
  ).children[3].children[1].classList.remove("border-left");

  $$.querySelector(".contact-lan-site").children[3].children[1].classList.add(
    "border-right"
  );

  $$.querySelector(".contact-lan-site").children[3].classList.remove(
    "border-left-1"
  );

  $$.querySelector(".contact-lan-site").children[3].classList.add(
    "border-right-1"
  );
}

// Change language to EN
function changeToEN() {
  languageSite = "EN";
  $$.querySelector(".changeLan1").innerHTML = "FA";
  $$.querySelector(".changeLan2").innerHTML = "FA";
  localStorage.setItem("LA", "EN");

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

  // about page change
  $$.querySelector(".about-lan-site").innerHTML = languages[1].aboutPage[0];

  // service page change
  $$.querySelector(".service-lan-site").innerHTML = languages[1].servicePage[0];

  // skills page change
  $$.querySelector(".skills-lan-site").innerHTML = languages[1].skillsPage[0];

  // contact page change
  $$.querySelector(".contact-lan-site").innerHTML = languages[1].contactPage[0];
}
