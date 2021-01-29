

class Login {
  constructor() {
    this.emailInput = document.querySelector("#email");
    this.passwordInput = document.querySelector("#password");

    this.loginButton = document.querySelector("#login-button");
    this.messageContainer = document.querySelector(".message-container");
  }

  submit = (event) => {
    event.preventDefault();
    const email = this.emailInput.value;
    const password = this.passwordInput.value;
    const emailValidation = email.match(
      /([a-zA-ZñÑ0-9._-]+@[a-zA-ZñÑ0-9._-]+\.[a-zA-Z0-9._-]+)/gi
    );
    this.messageContainer.innerHTML = "";
    const message = document.createElement("p");
    if (email.length === 0 || emailValidation.length === 0 || emailValidation === null){
      message.innerHTML = 'email no válido';
      this.messageContainer.appendChild(message)
      this.emailInput.className = "form-control is-invalid"; 
    } else if (password === "" ){
      message.innerHTML = 'La contraseña no debe estar vacía';
      this.messageContainer.appendChild(message)
      this.passwordInput.className = "form-control is-invalid";
      } 
      this.messageContainer.className = "message-container-styling"; 
    }
}

const login = new Login();

login.loginButton.addEventListener("click", login.submit);
