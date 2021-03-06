"use strict";

var validateEmail = function validateEmail() {
  var email = document.getElementById("email");
  var re = /^[a-zA-Z0-9\-_]+(\.[a-zA-Z0-9\-_]+)*@[a-z0-9]+(\-[a-z0-9]+)*(\.[a-z0-9]+(\-[a-z0-9]+)*)*\.[a-z]{2,4}$/;

  if (re.test(email)) {
    document.getElementById("success").innerHTML = "Thank You!";
  } else {
    email.classList.remove("success");
    email.classList.add("error");
    document.getElementById("error").innerHTML = "Oops! That does not look like a valid email";
    return false;
  }
};

window.onload = function () {
  var button = document.getElementById("submit");
  button.addEventListener("click", function () {
    validateEmail();
  });
};