
/* JQUERY VALIDATIONS */

$(document).ready(function() {
  $("#form").validate({
    rules: {
      email: {
        required: true,
        email: true,
      },
      password: {
        required: true,
        minlength: 8,
      },
      repeatPassword: {
        required: true,
        equalTo: "#password",
      },
    },
    messages: {
      email: "Por favor, introduce un email",
      password: {
        required: "Por favor, introduce una contraseña",
        minlength: "Tu contraseña debe tener al menos 8 caracteres",
      },
      repeatPassword: {
        required: "Por favor, repite la contraseña",
        minlength: "Este campo debe tener al menos 8 caracteres",
        equalTo: "Este campo debe coincidir con la contraseña"
      },
    },
  })
})