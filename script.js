// ///////////////////////////////////////////////////////////
// =================  ALERT MODAL CLOSE  ====================
// ///////////////////////////////////////////////////////////
const alertBtn = document.querySelector(".alert-btn");
const alertBox = document.querySelector(".alert-success");
if (alertBtn) {
  alertBtn.addEventListener("click", function () {
    alertBox.classList.add("hidden");
  });
}

// ///////////////////////////////////////////////////////////
// Using selectors inside the element to make SKILLS ACCORDION
// ///////////////////////////////////////////////////////////
const gridItem = document.querySelectorAll(".grid-item");

gridItem.forEach(function (item) {
  // console.log(item);
  const skillBtn = item.querySelector("#dropdown-btn");
  // console.log(skillBtn);
  skillBtn.addEventListener("click", function () {
    gridItem.forEach(function (items) {
      // console.log(items);
      if (items != item) {
        items.classList.remove("show-text");
      }
    });

    item.classList.toggle("show-text");
  });
});

// ///////////////////////////////////////////////////////////
// ===============   NAV-BAR (SMALL SCREEN)  =================
// ///////////////////////////////////////////////////////////

const navHam = document.querySelector(".nav-ham");
const nav = document.querySelector(".nav-sm-screen");
const navClose = document.querySelector(".nav-close");
const navLinks = document.querySelectorAll(".nav-link");
const navBar = document.querySelector(".nav-bar");

navHam.addEventListener("click", function () {
  navBar.classList.toggle("show-nav");
});
navClose.addEventListener("click", function () {
  navBar.classList.toggle("show-nav");
});

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navBar.classList.toggle("show-nav");
    navClose.classList.toggle("hidden");
  });
});
// ///////////////////////////////////////////////////////////
// ====================   HIDE ALERT  =======================
// ///////////////////////////////////////////////////////////

const hideAlert = function () {
  if (alertBox) {
    alertBox.remove();
  }
};

setTimeout(hideAlert, 10000);

// ///////////////////////////////////////////////////////////
// ====================  STICKY NAVIGATION ===================
// ///////////////////////////////////////////////////////////

const sectionHome = document.getElementById("home");
const body = document.body;
const options = {
  root: null,
  threshold: 0,
  rootMargin: "-64px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    console.log(entry);
    if (!entry.isIntersecting) {
      body.classList.add("nav-scrolled");
    }
    if (entry.isIntersecting) {
      body.classList.remove("nav-scrolled");
    }
  });
}, options);

observer.observe(sectionHome);

// ///////////////////////////////////////////////////////////
// ====================     MOVE TO TOP    ===================
// ///////////////////////////////////////////////////////////
const moveToTop = document.querySelector(".move-to-top-btn");

window.addEventListener("scroll", function () {
  const value = window.scrollY;
  console.log(value);

  if (value > 1000) {
    moveToTop.classList.add("active-mtt");
  } else if (value < 100) {
    moveToTop.classList.remove("active-mtt");
  }
});
