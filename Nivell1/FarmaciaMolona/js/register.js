class Signup {
  constructor() {
    this.emailInput = document.querySelector("#email");
    this.passwordInput = document.querySelector("#password");
    this.repeatPasswordInput = document.querySelector("#repeatPassword");
    this.selectInput = document.querySelector("#select");

    this.signupButton = document.querySelector("#signup-button");
    this.messageContainer = document.querySelector(".message-container");
  }

  submit = (event) => {
    event.preventDefault();
    const email = this.emailInput.value;
    const select = this.selectInput.value;
    const password = this.passwordInput.value;
    const repeatPassword = this.repeatPasswordInput.value;
    const emailValidation = email.match(
      /([a-zA-ZñÑ0-9._-]+@[a-zA-ZñÑ0-9._-]+\.[a-zA-Z0-9._-]+)/gi
    );
    this.messageContainer.innerHTML = "";
    const message = document.createElement("p");

   

    if (
      email.length === 0 ||
      emailValidation.length === 0 ||
      emailValidation === null
    ) {
      message.innerHTML = "email no válido";
      this.messageContainer.appendChild(message);
      this.emailInput.className = "form-control is-invalid";
    } else if (select === "not-valid") {
      message.innerHTML = "Elige una provincia";
      this.messageContainer.appendChild(message);
      this.select.className = "form-control is-invalid";
    } else if (password === "") {
      message.innerHTML = "La contraseña no debe estar vacía";
      this.messageContainer.appendChild(message);
      this.passwordInput.className = "form-control is-invalid";
    } 
    
    /* NIVELL 2 */
    else if (/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/.test(password) === false || password.length < 8) {
      message.innerHTML = "La contraseña debe tener un mínimo de 8 caracteres (que sean mayúsculas, minúsculas y números)";
      this.messageContainer.appendChild(message);
      this.passwordInput.className = "form-control is-invalid";
    }
    /* NIVELL 2 END*/
    
    else if (repeatPassword !== password) {
      message.innerHTML = "Las contraseñas deben ser iguales";
      this.messageContainer.appendChild(message);
      this.repeatPassword.className = "form-control is-invalid";
    }
    this.messageContainer.className = "message-container-styling";
  };
}

const signup = new Signup();

signup.signupButton.addEventListener("click", signup.submit);
