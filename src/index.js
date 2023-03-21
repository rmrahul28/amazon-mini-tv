// import "./styles.css";
let regUsername = document.getElementById("regUsername");
let regPassword = document.getElementById("regPassword");
let regSuccessful = document.getElementById("regSuccessful");

let loginName = document.getElementById("loginName");
let loginPassword = document.getElementById("loginPassword");
let loginResult = document.getElementById("loginResult");

let loginbtn = document.getElementById("loginbtn");
let regbtn = document.getElementById("regbtn");
let formbody = document.getElementById("body");
let loginpage = document.getElementById("loginpage");

regbtn.addEventListener("click", funsignup);
loginbtn.addEventListener("click", funlogin);
loginpage.addEventListener("click", loginpagefun);

function loginpagefun() {
  formbody.style.display = "block";
  formbody.style.position = "absolute";
  formbody.style.top = "13vh";
  formbody.style.left = "30vw";
}

function funsignup(event) {
  // event.preventDefault()
  let userData = {
    regUsername: regUsername.value,
    regPassword: regPassword.value
  };
  let jsonData = JSON.stringify(userData);
  localStorage.setItem("userData", jsonData);
  regSuccessful.innerText = "Sign Up Successfull!";
}
function funlogin(event) {
  // event.preventDefault()
  let jsonData = localStorage.getItem("userData") || false;
  if (jsonData === false) {
    loginResult.innerText = "User Not Found";
  }
  let actualData = JSON.parse(jsonData);

  if (
    actualData.regUsername === loginName.value &&
    actualData.regPassword === loginPassword.value
  ) {
    loginResult.innerText = "Login regSuccessful!";
    formbody.style.display = "none";
    alert("Login Successfull");
  } else {
    loginResult.innerText = "Wrong Username/Password!";
  }
}
