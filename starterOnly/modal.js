//import ValidateClass from "./entity/ValidateClass";

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const form = document.getElementById("form");
const firstName = document.getElementById("first");
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
//ecoute du form
formData.forEach((input) => input.addEventListener("input", launchForm));

function launchForm(e) {
  const validate = new ValidateClass(form);
  return validate;
  const errorFirstName = document.getElementById("errorFirstName");
  const errorLastName = document.getElementById("errorLastName");

  const myForm = new FormData(form);

  errorFirstName.textContent = myForm.get("first");
  errorLastName.textContent = myForm.get("last");

  console.log(myForm.get("first"));
  console.log(myForm.get("last"));
}
// launch validate

function validate(e) {
  e.preventDefault();

  //DOM Elements
  /* const firstName = document.getElementById("first").value;
  const lastName = document.getElementById("last").value;
  const birthDate = document.getElementById("birthdate").value;
  const checkbox1 = document.getElementById("checkbox1").value;

  const errorLastName = document.getElementById("errorLastName");
  const errorFirstName = document.getElementById("errorFirstName");
  const errorBirthDate = document.getElementById("errorBirthDate");
  const errorCheckbox1 = document.getElementById("errorCheckbox1");

  //First name validation

  //errorFirstName.innerHTML = firstName == "" ? "* Veuillez renseigner votre prénom" : true;
  if (firstName == "") {
    errorFirstName.innerHTML = "* Veuillez renseigner votre prénom";
    return false;
  } else if (firstName.replace(/\s+/g, "").length < 2) {
    errorFirstName.innerHTML =
      "* Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    return false;

    //LastName validation
  } else if (lastName == "") {
    errorLastName.innerHTML = "* Veuillez renseigner votre nom";
    return false;
  } else if (lastName.replace(/\s+/g, "").length < 2) {
    errorLastName.innerHTML =
      "* Veuillez entrer 2 caractères ou plus pour le champ du nom";
    return false;
  }
  //Birthdate validation
  else if (birthDate == "") {
    errorBirthDate.innerHTML = "* Vous devez entrer votre date de naissance.";
    return false;
  } else {
    alert("Formulaire soumis");
    return true;
  }*/
}
