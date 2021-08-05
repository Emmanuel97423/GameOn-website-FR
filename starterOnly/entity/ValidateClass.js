export default class ValidateClass {
  constructor(
    first,
    last,
    email,
    birthdate,
    quantity,
    location,
    checkbox1,
    validate
  ) {
    this.first = first;
    this.last = last;
    this.email = email;
    this.birthdate = birthdate;
    this.validate = validate;
    this.quantity = quantity;
    this.location = location;
    this.checkbox1 = checkbox1;
  }
  //Vérification du prénom
  get validateFirstName() {
    return this.checkFirstName();
  }
  //Vérification du nom
  get validateLastName() {
    return this.checkLastName();
  }
  //Vérification de l'email
  get validateEmail() {
    return this.checkEmail();
  }
  //Vérification de la date d'anniversaire
  get validateBirthday() {
    return this.checkBirthday();
  }
  //Vérification nombre de tournoi participé
  get validateQuantity() {
    return this.checkQuantity();
  }
  //Vérification CGU
  get validateCgu() {
    return this.checkCgu();
  }

  //Méthodes
  checkFirstName() {
    if (this.first.length < 2) {
      this.validate = false;

      return "Veuillez entrer 2 caractères ou plus.";
    } else {
      this.validate = true;
    }
  }
  checkLastName() {
    if (this.last.length < 2) {
      this.validate = false;
      return "Veuillez entrer 2 caractères ou plus.";
    } else {
      this.validate = true;
    }
  }
  checkEmail() {
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const test = re.test(this.email);
    if (!test) {
      this.validate = false;
      return "Veuillez entrer une adresse email valide";
    } else {
      this.validate = true;
    }
  }
  checkBirthday() {
    if (!this.birthdate) {
      this.validate = false;
      return "Veuillez entrer votre date de naissance";
    } else {
      this.validate = true;
    }
  }
  checkCgu() {
    if (this.checkbox1 !== "on") {
      this.validate = false;
      return "Veuillez accepter les conditions genérales";
    } else {
      this.validate = true;
    }
  }
}
