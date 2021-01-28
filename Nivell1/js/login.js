console.log('hola mundo')



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
    console.log(emailValidation, 'vali')
    this.messageContainer.innerHTML = "";
    const message = document.createElement("p");
    if (email.length === 0 || emailValidation.length === 0 || emailvalidation === null){
      message.innerHTML = 'email no válido';
    } else if (password.length === 0 ){
      message.innerHTML = 'La contraseña no debe estar vacía';
      }
      this.messageContainer.appendChild(message)

    }

  
}

const login = new Login();

login.loginButton.addEventListener("click", login.submit);
