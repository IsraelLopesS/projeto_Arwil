export function headerFixed() {
  window.addEventListener("scroll", function () {
    let header = document.getElementById("header");
    let a = document.getElementById("m1");
    let b = document.getElementById("m2");
    let c = document.getElementById("m3");
    let d = document.getElementById("m4");
    let e = document.getElementById("m5");
    let f = document.getElementById("burger");
    let cor = "black";
    let cor1 = "white";
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 0) {
      header.style.backgroundColor = "#ffffffe0";
      header.style.transition = "all 1s";
      a.style.color = cor;
      b.style.color = cor;
      c.style.color = cor;
      d.style.color = cor;
      e.style.color = cor;
      f.style.color = cor;
    } else {
      header.style.backgroundColor = "transparent";
      header.style.transition = "all 1s";
      a.style.color = cor1;
      b.style.color = cor1;
      c.style.color = cor1;
      d.style.color = cor1;
      e.style.color = cor1;
      f.style.color = cor1;
    }
  });

  window.addEventListener("load", () => {
    const headerHeight = document.querySelector("header").offsetHeight;
    const menuItems = document.querySelectorAll('a[href^="#"]');
    const scrollButton = document.getElementById("scroll-button");

    menuItems.forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const sectionId = this.getAttribute("href").substring(1);
        const section = document.getElementById(sectionId);
        const sectionTop = section.offsetTop - headerHeight;

        window.scrollTo({
          top: sectionTop,
          behavior: "smooth",
        });
      });
    });

    if (scrollButton) {
      scrollButton.addEventListener("click", function (e) {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
    }
  });
}
