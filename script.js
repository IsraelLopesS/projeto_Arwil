

$(document).ready(function() {
    $('#contactForm').submit(function(e) {
      e.preventDefault(); // Impede o envio padrão do formulário
   
      // Envia o formulário usando AJAX
      $.ajax({
        url: $(this).attr('action'),
        method: 'POST',
        data: $(this).serialize(),
        dataType: 'json',
        beforeSend: function() {
          // Exibe uma mensagem de envio
          $('#message').text('Enviando mensagem...').show();
        },
        success: function(response) {
          // Exibe a mensagem de agradecimento após o envio bem-sucedido
          $('#message').text('Obrigado por entrar em contato! Retornaremos em breve.').show();

          // Limpa os campos do formulário
          $('#contactForm')[0].reset();
        },
        error: function() {
          // Exibe uma mensagem de erro, se houver algum problema
          $('#message').text('Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente mais tarde.').show();
        }
      });
    });
  });


  window.addEventListener('scroll', function() {
    var header = document.getElementById('site-header');
    var scrollPosition = window.scrollY;
  
    if (scrollPosition > 0) {
      header.classList.add('header-scroll');
    } else {
      header.classList.remove('header-scroll');
    }
  });


  

  
  document.addEventListener('DOMContentLoaded', function() {
    const carousels = [
      { id: 'carousel1', folder: './img/galerys/galery1/', imageCount: 39 },
      { id: 'carousel2', folder: './img/galerys/galery2/', imageCount: 21 },
      { id: 'carousel3', folder: './img/galerys/galery3/', imageCount: 17 },
      { id: 'carousel4', folder: './img/galerys/galery4/', imageCount: 15 },
      { id: 'carousel5', folder: './img/galerys/galery5/', imageCount: 20 },
      { id: 'carousel6', folder: './img/galerys/galery6/', imageCount: 12 },
      { id: 'carousel7', folder: './img/galerys/galery7/', imageCount: 5 },
      { id: 'carousel8', folder: './img/galerys/galery8/', imageCount: 10 }
    ];
    // Função para mudar a imagem de fundo da div
  // Função para mudar a imagem de fundo da div
  function changeBackgroundImage(carouselId, folder, imageIndex) {
    const imagePath = `${folder}${imageIndex}.webp`;
    const carousel = document.getElementById(carouselId);
    carousel.style.backgroundImage = `url(${imagePath})`;
  }

  // Função para ampliar o carrossel
  function zoomCarousel(event) {
    const carousel = event.target.parentElement.parentElement;
    carousel.classList.toggle('zoomed');
  }

  // Adiciona o evento de clique aos botões e à imagem
  carousels.forEach(carousel => {
    const prevBtn = document.querySelector(`#${carousel.id} .prev-btn`);
    const nextBtn = document.querySelector(`#${carousel.id} .next-btn`);
    const image = document.querySelector(`#${carousel.id} .carousel-image`);
    const closeBtn = document.querySelector(`#${carousel.id} .close-btn`);

    let currentImageIndex = 1;

    prevBtn.addEventListener('click', () => {
      currentImageIndex = (currentImageIndex - 1 + carousel.imageCount) % carousel.imageCount;
      changeBackgroundImage(carousel.id, carousel.folder, currentImageIndex + 1);
    });

    nextBtn.addEventListener('click', () => {
      currentImageIndex = (currentImageIndex + 1) % carousel.imageCount;
      changeBackgroundImage(carousel.id, carousel.folder, currentImageIndex + 1);
    });

    image.addEventListener('click', zoomCarousel);

    closeBtn.addEventListener('click', () => {
      carousel.classList.remove('zoomed');
    });

    // Define a imagem inicial
    changeBackgroundImage(carousel.id, carousel.folder, currentImageIndex);
  });
});
  
  