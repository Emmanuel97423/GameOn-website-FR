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
const formData = document.querySelectorAll(".formData");
const form = document.getElementById("form");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
//ecoute du form
formData.forEach((input) => input.addEventListener("input", launchForm));

//Launch function
function launchForm(e) {
  const errorFirstName = document.getElementById("errorFirstName");
  const errorLastName = document.getElementById("errorLastName");
  const errorEmail = document.getElementById("errorEmail");
  const errorBirthday = document.getElementById("errorBirthDate");
  const errorCheckbox1 = document.getElementById("errorCheckbox1");

  //let cguChecked = document.getElementById("checkbox1");

  //FormData
  // const myForm = new FormData(form);
  // const firstName = myForm.get("first");
  // const lastName = myForm.get("last");
  // const email = myForm.get("email");
  // const birthday = myForm.get("birthdate");
  // const quantity = myForm.get("quantity");
  // const country = myForm.get("location");

  let validate = new ValidateClass();
  const formData = new FormData(form);
  formData.forEach((value, key) => {
    validate[key] = value.trim();
  });

  //const cgu = cguChecked.checked;

  //Validate Class
  // const validate = new ValidateClass(
  //   firstName,
  //   lastName,
  //   email,
  //   birthday,
  //   quantity,
  //   country,
  //   cgu
  // );

  errorLastName.textContent = validate.validateLastName;
  errorFirstName.textContent = validate.validateFirstName;
  errorEmail.textContent = validate.validateEmail;
  errorBirthday.textContent = validate.validateBirthday;
  errorCheckbox1.textContent = validate.validateCgu;
  console.log(validate);
  //Tournoi participé
}
// launch validate
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let validateSubmit = new ValidateClass(form);
  const formData = new FormData(form);
  formData.forEach((value, key) => {
    validateSubmit[key] = value.trim();
    if ((validateSubmit.validate = false)) {
      formData.setAttribute("data-error-visible", true);
    }
  });
  alert("Formulaire soumis avec succée");
  window.open("https://www.w3schools.com");
});

function validate(e) {}
