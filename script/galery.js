function createImageElement(src) {
  const img = document.createElement("img");
  img.src = src;
  return img;
}
function disableScroll() {
  document.body.style.overflow = "hidden";
}

function enableScroll() {
  document.body.style.overflow = "";
}

function showImage(images, index) {
  images.forEach((img, i) => {
    img.style.display = i === index ? "block" : "none";
  });
}

function createCarousel(carousel) {
  const images = [];
  let currentIndex = 0;
  let prevBtn;
  let nextBtn;

  const carouselContainer = document.getElementById(carousel.id);

  for (let i = 1; i <= carousel.imageCount; i++) {
    const src = `${carousel.folder}${i}.webp`;
    const img = createImageElement(src);
    img.classList.add("carousel-image");
    images.push(img);
    carouselContainer.appendChild(img);
  }

  prevBtn = carouselContainer.querySelector(".prev-btn");
  nextBtn = carouselContainer.querySelector(".next-btn");

  function prevImage() {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = images.length - 1;
    }
    showImage(images, currentIndex);
  }

  function nextImage() {
    if (currentIndex < images.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    showImage(images, currentIndex);
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

  showImage(images, currentIndex);
}

export { createCarousel };
