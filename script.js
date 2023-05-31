$(document).ready(function () {
  $("#contactForm").submit(function (e) {
    e.preventDefault();

    $.ajax({
      url: $(this).attr("action"),
      method: "POST",
      data: $(this).serialize(),
      dataType: "json",
      beforeSend: function () {
        $("#message").text("Enviando mensagem...").show();
      },
      success: function (response) {
        $("#message").text("Mensagem enviada com sucesso!").show();

        $("#contactForm")[0].reset();
      },
      error: function () {
        $("#message")
          .text(
            "Ocorreu um erro ao enviar a mensagem. Por favor, Entre em contato pelo whatsapp, telefone ou e-mail."
          )
          .show();
      },
    });
  });
});

window.addEventListener("scroll", function () {
  var header = document.getElementById("site-header");
  var scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    header.classList.add("header-scroll");
  } else {
    header.classList.remove("header-scroll");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const carousels = [
    { id: "carousel1", folder: "./img/galerys/galery1/", imageCount: 39 },
    { id: "carousel2", folder: "./img/galerys/galery2/", imageCount: 21 },
    { id: "carousel3", folder: "./img/galerys/galery3/", imageCount: 17 },
    { id: "carousel4", folder: "./img/galerys/galery4/", imageCount: 15 },
    { id: "carousel5", folder: "./img/galerys/galery5/", imageCount: 20 },
    { id: "carousel6", folder: "./img/galerys/galery6/", imageCount: 12 },
    { id: "carousel7", folder: "./img/galerys/galery7/", imageCount: 5 },
    { id: "carousel8", folder: "./img/galerys/galery8/", imageCount: 10 },
  ];

  function createImageElement(src) {
    const img = document.createElement("img");
    img.src = src;
    return img;
  }

  function createCarousel(carousel) {
    const carouselContainer = document.getElementById(carousel.id);
    const prevBtn = carouselContainer.querySelector(".prev-btn");
    const nextBtn = carouselContainer.querySelector(".next-btn");
    const images = [];

    for (let i = 1; i <= carousel.imageCount; i++) {
      const src = `${carousel.folder}${i}.webp`;
      const img = createImageElement(src);
      img.classList.add("carousel-image");
      images.push(img);
      carouselContainer.appendChild(img);
    }

    let currentIndex = 0;

    function showImage(index) {
      images.forEach((img, i) => {
        img.style.display = i === index ? "block" : "none";
      });
    }

    function prevImage() {
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = images.length - 1;
      }
      showImage(currentIndex);
    }

    function nextImage() {
      if (currentIndex < images.length - 1) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      showImage(currentIndex);
    }

    prevBtn.addEventListener("click", prevImage);
    nextBtn.addEventListener("click", nextImage);

    carouselContainer.addEventListener("click", function (e) {
      const target = e.target;
      if (target.classList.contains("carousel-image")) {
        const overlay = document.createElement("div");
        overlay.classList.add("overlay");

        const closeBtn = document.createElement("button");
        closeBtn.classList.add("close-btn");
        closeBtn.innerHTML = "&times;";

        const expandedImage = target.cloneNode();
        expandedImage.classList.add("expanded-image");

        const prevBtnExpanded = prevBtn.cloneNode(true);
        const nextBtnExpanded = nextBtn.cloneNode(true);
        prevBtnExpanded.classList.add("prev-btn-expanded");
        nextBtnExpanded.classList.add("next-btn-expanded");

        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("button-container");
        buttonContainer.appendChild(prevBtnExpanded);
        buttonContainer.appendChild(nextBtnExpanded);

        overlay.appendChild(closeBtn);
        overlay.appendChild(buttonContainer);
        overlay.appendChild(expandedImage);
        document.body.appendChild(overlay);

        let currentIndexExpanded = currentIndex;

        function showImageExpanded(index) {
          expandedImage.src = images[index].src;
          currentIndexExpanded = index;
        }

        function prevImageExpanded() {
          if (currentIndexExpanded > 0) {
            currentIndexExpanded--;
          } else {
            currentIndexExpanded = images.length - 1;
          }
          showImageExpanded(currentIndexExpanded);
        }

        function nextImageExpanded() {
          if (currentIndexExpanded < images.length - 1) {
            currentIndexExpanded++;
          } else {
            currentIndexExpanded = 0;
          }
          showImageExpanded(currentIndexExpanded);
        }

        prevBtnExpanded.addEventListener("click", prevImageExpanded);
        nextBtnExpanded.addEventListener("click", nextImageExpanded);

        closeBtn.addEventListener("click", function () {
          overlay.remove();
        });

        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        overlay.style.position = "fixed";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.display = "flex";
        overlay.style.justifyContent = "center";
        overlay.style.alignItems = "center";
        overlay.style.zIndex = "9999";

        function disableScroll() {
          document.body.style.overflow = "hidden";
        }

        function enableScroll() {
          document.body.style.overflow = "";
        }

        disableScroll();

        overlay.addEventListener("click", function (e) {
          const target = e.target;
          if (target.classList.contains("overlay")) {
            enableScroll();
            overlay.remove();
          }
        });

        closeBtn.addEventListener("click", function () {
          enableScroll();
          overlay.remove();
        });
      }
    });

    showImage(currentIndex);
  }

  carousels.forEach(createCarousel);
});


const buttons = document.querySelectorAll(".scroll-link");


buttons.forEach((button) => {
  button.addEventListener("click", smoothScroll);
});


function smoothScroll(event) {
  event.preventDefault(); 

  const targetId = this.getAttribute("data-target"); // 

  const targetSection = document.querySelector(targetId); 

  const headerHeight = document.querySelector("header").offsetHeight; 

  const targetPosition = targetSection.offsetTop - headerHeight; 

  window.scrollTo({
    top: targetPosition,
    behavior: "smooth", 
  });
}
