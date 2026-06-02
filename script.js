document.addEventListener("DOMContentLoaded", function () {
  const mobileButton = document.querySelector(".mobile-menu");
  const mobileNav = document.querySelector(".mobile-nav");
  const yearSpan = document.getElementById("current-year");

  if (mobileButton && mobileNav) {
    mobileButton.addEventListener("click", function () {
      mobileNav.classList.toggle("show");
    });
  }

  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
