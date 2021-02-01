class Search {
    constructor() {
      this.searchInput = document.querySelector("#search");
  
      this.loginButton = document.querySelector("#search-button");
      this.messageContainer = document.querySelector(".message-container");
    }
  
    submit = (event) => {
      event.preventDefault();
      const search = this.searchInput.value;;
      this.messageContainer.innerHTML = "";
      const message = document.createElement("p");
      if (search.length < 3 ){
        message.innerHTML = 'Introduce al menos 3 caracteres';
        this.messageContainer.appendChild(message)
        this.searchInput.className = "form-control form-control-lg is-invalid"; 
      } 
        this.messageContainer.className = "message-container-styling"; 
      }
  }
  
  const search = new Search();
  
  search.loginButton.addEventListener("click", search.submit);