function login() {
  if (validateInputs()) {
    //setCookie
    setCookie("name", Name);
    //clear localStorage
    localStorage.clear();
    //replace page with index page
    window.location.replace("./index.html");
  }
}

function setCookie(key, value) {
  var expireDate = new Date();
  expireDate.setDate(expireDate.getDate() + 5);
  document.cookie =
    key + "=" + value + ";expires=" + expireDate.toUTCString() + ";path=/";
}


function validateInputs() {
  // if (validateName())
  //     console.log("Name is valid");

  // if (validateEmail()) console.log("Email is valid");

  // if (validatePass()) console.log("Pass is valid");

  // if(confirmPass()) console.log("Confirmed");
  if (validateName() && validateEmail() && validatePass() && confirmPass()) {
    return true;
  }
}

var Name; 
function validateName() {
  Name = document.getElementById("NameInput").value;
  var reqName = document.getElementsByClassName("requiredName")[0];
  var nameError = document.getElementsByClassName("nameError")[0];
  var nameRegx = /^[A-Za-z]{3,}$/;
  if (Name.length == 0) {
    nameError.classList.remove("show");
    reqName.classList.add("show");
  } else if (!nameRegx.test(Name)) {
    reqName.classList.remove("show");
    nameError.classList.add("show");
  } else {
    reqName.classList.remove("show");
    nameError.classList.remove("show");
    return true;
  }
}

function validateEmail() {
  var email = document.getElementById("EmailInput").value;
  var reqEmail = document.getElementsByClassName("requiredEmail")[0];
  var validEmail = document.getElementsByClassName("validEmail")[0];
  var emailRegx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (email.length == 0) {
    reqEmail.classList.add("show");
    validEmail.classList.remove("show");
  } else if (!emailRegx.test(email)) {
    reqEmail.classList.remove("show");
    validEmail.classList.add("show");
  } else {
    reqEmail.classList.remove("show");
    validEmail.classList.remove("show");
    return true;
  }
}

var pas;
function validatePass() {
  pass = document.getElementById("PasswordInput").value;
  console.log("pass: ",pass);
  var reqPass = document.getElementsByClassName("requiredPass")[0];
  var validPass = document.getElementsByClassName("validPass")[0];
  var passRegx = /^(?=.*[A-Z])(?=.*[a-z]).{8,}$/;
  if (pass.length == 0) {
    validPass.classList.remove("show");
    reqPass.classList.add("show");
  } else if (!passRegx.test(pass)) {
    reqPass.classList.remove("show");
    validPass.classList.add("show");
  } else {
    reqPass.classList.remove("show");
    validPass.classList.remove("show");
    return true;
  }
}

function confirmPass() {
  var confirmPass = document.getElementById("ConfirmPassInput").value;
  var reqConfirm = document.getElementsByClassName("requiredConfirm")[0];
  var matchPass = document.getElementsByClassName("matchPassword")[0];
  console.log("confirm: ", confirmPass);
  if (confirmPass.length == 0) {
    matchPass.classList.remove("show");
    reqConfirm.classList.add("show");
  } else if (confirmPass!=pass) {
    reqConfirm.classList.remove("show");
    matchPass.classList.add("show");
  } else {
    reqConfirm.classList.remove("show");
    matchPass.classList.remove("show");
    return true;
  }
}
