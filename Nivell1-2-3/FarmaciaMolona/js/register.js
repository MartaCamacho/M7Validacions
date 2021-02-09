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
    function validateEmail(x) {
      const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(x);
    }
    const validate = validateEmail(email);
    console.log(validate, 'la val')
    
    const select = this.selectInput.value;
    const password = this.passwordInput.value;
    const repeatPassword = this.repeatPasswordInput.value;
    this.messageContainer.innerHTML = "";
    const message = document.createElement("p");
    if (email.length === 0) {
      message.innerHTML = "El email no puede estar vacío";
      this.messageContainer.appendChild(message);
      this.emailInput.className = "form-control is-invalid";
    } else if (validate === false){
      message.innerHTML = "Email no válido";
      this.messageContainer.appendChild(message);
      this.emailInput.className = "form-control is-invalid";
    }else if (select === "not-valid") {
      message.innerHTML = "Elige una provincia";
      this.messageContainer.appendChild(message);
      this.selectInput.className = "form-control is-invalid";
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

