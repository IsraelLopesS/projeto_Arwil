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
  