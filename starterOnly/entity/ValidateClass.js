export default class ValidateClass {
  contructor(form) {
    this.form = form;
  }

  get validateFirstName() {
    return this.checkFirstName;
  }
  checkFirstName() {
    const errorFirstName = document.getElementById("errorFirstName");
    const first = document.getElementById("first");
    const myForm = new FormData(this.form);
    first.addEventListener("input", (e) => {
      if (myForm.get("first").length < 2) {
        errorFirstName.innerHTML = "Minimum 2 caractère";

        return false;
      } else if (!myForm.get("first")) {
        errorFirstName.innerHTML = "Le champs ne peut pas être vide";

        return false;
      } else {
        return true;
      }
    });
  }
}
