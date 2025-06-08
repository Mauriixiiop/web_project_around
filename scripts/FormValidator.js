export default class FormValidator {
  constructor(requirements) {
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
      this.hideError(input);
    } else {
      this.showError(input);
    }
  }

  toggleButtonState(form, button) {
    const inputs = Array.from(
      form.querySelectorAll(this.requirements.inputSelector)
    );
    const isValid = inputs.every((input) => input.validity.valid);
    button.disabled = !isValid;
  }

  setEventListeners(formElement) {
    const inputs = formElement.querySelectorAll(
      this.requirements.inputSelector
    );

    const button = formElement.querySelector(
      this.requirements.submitButtonSelector
    );

    this.toggleButtonState(formElement, button);

    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        this.checkInputValidity(input);
        this.toggleButtonState(formElement, button); // corregido typo
      });
    });

    formElement.addEventListener("submit", (event) => {
      event.preventDefault();
    });
  }

  enableValidation() {
    const forms = document.querySelectorAll(this.requirements.formSelector);
    forms.forEach((formElement) => {
      this.setEventListeners(formElement);
    });
  }
}
