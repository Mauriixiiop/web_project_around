//funcion de mostrar el error
const showError = (input, requirements) => {
  const errorMessage = input.validationMessage;
  const errorElement = document.querySelector(`#${input.id}-error`);

  input.classList.add(requirements.inputErrorClass);
  errorElement.classList.add(requirements.errorClass);
  errorElement.textContent = errorMessage;
};

//función que esconde el error
const hideError = (input, requirements) => {
  const errorElement = document.querySelector(`#${input.id}-error`);

  input.classList.remove(requirements.inputErrorClass);
  errorElement.classList.remove(requirements.errorClass);
  errorElement.textContent = "";
};

//función para la validación de input
const checkInputValidity = (input, requirements) => {
  if (input.validity.valid) {
    hideError(input, requirements);
  } else {
    showError(input, requirements);
  }
};

//
const toogleButtonState = (form, button, requirements) => {
  const inputs = Array.from(form.querySelectorAll(requirements.inputSelector));
  const isValid = inputs.every((input) => input.validity.valid);
  if (isValid) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
};

//todos los input, establece los eventos input y submit
const setEventListeners = (formElement, requirements) => {
  const inputs = formElement.querySelectorAll(requirements.inputSelector);

  const button = formElement.querySelector(requirements.submitButtonSelector);

  toogleButtonState(formElement, button, requirements);
  //itera sobre los elementos
  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      checkInputValidity(input, requirements);
      toogleButtonState(formElement, button, requirements);
    });
  });

  formElement.addEventListener("submit", (event) => {
    event.preventDefault();
  });
};

//habilita la validación
export const enableValidation = (requirements) => {
  const forms = document.querySelectorAll(requirements.formSelector);
  //llama a todos los formularios
  forms.forEach((formElement) => {
    setEventListeners(formElement, requirements);
  });
};
