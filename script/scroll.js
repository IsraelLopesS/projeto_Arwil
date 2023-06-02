export function scrollpage() {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      header.classList.add("header-scroll");
    } else {
      header.classList.remove("header-scroll");
    }
  });
  const header = document.getElementById("site-header");

  const buttons = document.querySelectorAll(".scroll-link");

  buttons.forEach((button) => {
    button.addEventListener("click", smoothScroll);
  });

  function smoothScroll(event) {
    event.preventDefault();

    const targetId = this.getAttribute("data-target");
    const targetSection = document.querySelector(targetId);
    const headerHeight = document.querySelector("header").offsetHeight;
    const targetPosition = targetSection.offsetTop - headerHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  }
}
