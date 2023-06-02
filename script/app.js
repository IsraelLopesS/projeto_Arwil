import { initAjaxForm } from "./form.js";
import { createCarousel } from "./galery.js";
import { scrollpage } from "./scroll.js";

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

  carousels.forEach(createCarousel);
  scrollpage();
  initAjaxForm();
});
