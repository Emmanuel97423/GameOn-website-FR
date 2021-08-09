import ValidateClass from "./entity/ValidateClass.js";

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
const modalClose = document.querySelectorAll(".close");
const formData = document.querySelectorAll(".formData");
const form = document.getElementById("form");
const valueSuccess = document.getElementById("value");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalClose.forEach((close) => close.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
//Close modal form
function closeModal() {
  modalbg.style.display = "none";
}
//Listener form
formData.forEach((input) => input.addEventListener("input", launchForm));

//Launch function
function launchForm(e) {
  const errorFirstName = document.getElementById("errorFirstName");
  const errorLastName = document.getElementById("errorLastName");
  const errorEmail = document.getElementById("errorEmail");
  const errorBirthday = document.getElementById("errorBirthDate");
  const errorCheckbox1 = document.getElementById("errorCheckbox1");
  const errorLocation = document.getElementById("errorLocation");

  //Utilisation de formData
  let validate = new ValidateClass();
  const formDataLaunch = new FormData(form);
  formDataLaunch.forEach((value, key) => {
    validate[key] = value.trim();
  });

  //Message d'erreur
  errorLastName.textContent = validate.validateLastName;
  errorLastName.style.color = "red";
  errorFirstName.textContent = validate.validateFirstName;
  errorFirstName.style.color = "red";
  errorEmail.textContent = validate.validateEmail;
  errorEmail.style.color = "red";
  errorBirthday.textContent = validate.validateBirthday;
  errorBirthday.style.color = "red";
  errorCheckbox1.textContent = validate.validateCgu;
  errorCheckbox1.style.color = "red";
  errorLocation.textContent = validate.validateQuantity;
  errorLocation.style.color = "red";
}
// launch validate
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let validateSubmit = new ValidateClass(form);
  const formDataSubmit = new FormData(form);
  formDataSubmit.forEach((value, key) => {
    validateSubmit[key] = value.trim();
    if ((validateSubmit.validate = false)) {
      formData.setAttribute("data-error-visible", true);
    } else {
      form.style.display = "none";
      valueSuccess.innerHTML = `<div  text-align:center>
      <p>Fomulaire envoyé!</p>
      <button class="btn-signup modal-btn" >Fermer</button>
      </div>`;
    }
  });
});

// function validate(e) {}
