// navbar link
const navbarItems = document.querySelectorAll(".navbar-nav a");

navbarItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();

    const href = item.getAttribute("href");

    document.querySelector(href).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// efek fade in/out ketika load page
window.onload = function () {
  var sections = document.getElementsByTagName("section");
  for (var i = 0; i < sections.length; i++) {
    sections[i].style.opacity = 0;

    setTimeout(
      (function (index) {
        return function () {
          sections[index].style.opacity = 1;
          sections[index].style.transition = "opacity 1s ease-in-out";
        };
      })(i),
      500 * i
    );
  }
};

// efek fade in/out ketika scroll ke setiap section
const sections = document.querySelectorAll("section");

sections.forEach((section) => {
  const sectionTop = section.offsetTop;
  const sectionHeight = section.clientHeight;
  window.addEventListener("scroll", function () {
    const scrollY = window.pageYOffset;
    const scrollBottom = scrollY + window.innerHeight;
    if (
      scrollBottom > sectionTop + sectionHeight / 2 &&
      scrollY < sectionTop + sectionHeight
    ) {
      section.style.opacity = 1;
      section.style.transition = "opacity 1s ease-in-out";
    } else {
      section.style.opacity = 0;
    }
  });
});

// tombol back to top
const backToTopButton = document.querySelector(".back-to-top");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 100) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

backToTopButton.addEventListener("click", function (event) {
  event.preventDefault();
  window.scrollTo(0, 0);
});
