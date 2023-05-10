const showPassword = document.querySelector("#show-password");
const password = document.querySelector("#password");

function showMenu() {
  document.getElementById("hide").classList.toggle("show");
  console.log("clicked");
}

showPassword.addEventListener("click", function () {
  if (password.type === "password") {
    password.type = "text";
    this.classList.remove("fa-eye");
    this.classList.add("fa-eye-slash");
  } else {
    password.type = "password";
    this.classList.remove("fa-eye-slash");
    this.classList.add("fa-eye");
  }
});
