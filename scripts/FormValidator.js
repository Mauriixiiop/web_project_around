//exp def un todo
export default class FormValidator {
  constructor(requirements) {
    //cambios que se relacionan con el constructor
    this.requirements = requirements;
  }

  showError(input) {
    const errorMessage = input.validationMessage;
    const errorElement = document.querySelector(`#${input.id}-error`);
    input.classList.add(this.requirements.inputErrorClass);
    errorElement.classList.add(this.requirements.errorClass);
    errorElement.textContent = errorMessage;
  }

  hideError(input) {
    const errorElement = document.querySelector(`#${input.id}-error`);
    input.classList.remove(this.requirements.inputErrorClass);
    errorElement.classList.remove(this.requirements.errorClass);
    errorElement.textContent = "";
  }

  checkInputValidity(input) {
    if (input.validity.valid) {
      hideError(input);
    } else {
      showError(input);
    }
  }

  toggleButtonState(form, button) {
    const inputs = Array.from(
      form.querySelectorAll(this.requirements.inputSelector)
    );
    const isValid = inputs.every((input) => input.validity.valid);
    if (isValid) {
      button.disabled = false;
    } else {
      button.disabled = true;
    }
  }

  setEventListeners(formElement) {
    const inputs = formElement.querySelectorAll(
      this.requirements.inputSelector
    );

    const button = formElement.querySelector(
      this.requirements.submitButtonSelector
    );

    this.toggleButtonState(formElement, button);
    //itera sobre los elementos
    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        this.checkInputValidity(input);
        this.toogleButtonState(formElement, button);
      });
    });

    formElement.addEventListener("submit", (event) => {
      event.preventDefault();
    });
  }

  enableValidation() {
    const forms = document.querySelectorAll(this.requirements.formSelector); //selecciona a todos los formularios
    console.log(forms, "forms");
    forms.forEach((formElement) => {
      setEventListeners(formElement);
    });
  }
}

const FormValidator = new FormValidator();
