export function initAjaxForm() {
  $(document).ready(function () {
    $("#contactForm").submit(function (e) {
      e.preventDefault();

      if (
        $("#name").val() === "" ||
        $("#email").val() === "" ||
        $("#telephone").val() === "" ||
        $("#messagem").val() === ""
      ) {
        $("#message").text("Por favor, preencha todos os campos.").show();
        return;
      }

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
              "Ocorreu um erro ao enviar a mensagem. Por favor, entre em contato pelo WhatsApp, telefone ou e-mail."
            )
            .show();
        },
      });
    });
  });
}
