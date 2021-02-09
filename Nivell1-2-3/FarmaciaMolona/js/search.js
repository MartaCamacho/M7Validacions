class Search {
  constructor() {
    this.searchInput = document.querySelector("#search");

    this.loginButton = document.querySelector("#search-button");
    this.messageContainer = document.querySelector(".message-container");
  }

  submit = (event) => {
    event.preventDefault();
    const search = this.searchInput.value;
    this.messageContainer.innerHTML = "";
    const message = document.createTextNode("Introduce al menos 3 caracteres");
    if (search.length < 3) {
      this.messageContainer.appendChild(message);
      this.searchInput.className = "form-control form-control-lg is-invalid";
      this.messageContainer.className = "message-container-styling";
    } else {
      this.messageContainer.className = " ";
    }
  };
}

const search = new Search();

search.loginButton.addEventListener("click", search.submit);
