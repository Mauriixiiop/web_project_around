import {
  handlePopupImageOpen,
  handlePopupImageClose,
  openPopupProfile,
  handlePopupOpen,
  handlePopupClose,
  handlePopupAddOpen,
  handlePopupAddClose,
  handleProfileFormSubmit,
  handleCardFormSubmit,
  addCards,
} from "./utils.js";
import { Card } from "./Card.js";
import FormValidator from "./FormValidator.js";

//PROFILE INFO
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");

//POPUPS
const openPopup = document.querySelector(".popup"); //1ER POPUP
const openPopupAdd = document.querySelector(".popup__add"); //2DO POPUP
const openPopupImage = document.querySelector(".popup__image"); //IMG POPUP

//POPUP CONTENT
const formElement = document.querySelector(".popup__form"); //FORM EDITAR PERFIL
const nameInput = document.querySelector(".popup__input-name"); //NOMBRE
const jobInput = document.querySelector(".popup__input-job"); //ACERCA DE MÍ
const formAdd = document.querySelector(".popup__add-form"); //FORM NUEVO LUGAR
const addName = document.querySelector(".popup__add-input-name"); //TÍTULO
const addImage = document.querySelector(".popup__add-input-image"); //ENLACE

const buttonSubmit = document.querySelector(".popup__submit-button"); //GUARDAR
const buttonSubmitAdd = document.querySelector(".popup__add-submit-button"); //CREAR

//BOTONES ABRIR Y CERRAR POPUP
const buttonPopup = document.querySelector(".profile__edit-button"); // ABRIR LAPIZ
const buttonAddProfile = document.querySelector(".profile__add-button"); // ABRIR +

const buttonClosePopup = document.querySelector(".popup__button-close"); // X EDITAR P
const buttonCloseAdd = document.querySelector(".popup__add-button-close"); // X NUEVO L

const closePopupImage = document.querySelector(".popup__image-button-close"); // X IMG POPUP

const gallery = document.querySelector(".gallery");
const galleryTemplate = document.querySelector(".gallery__template");

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

//ARREGLADO
initialCards.forEach(function (card) {
  //instanciando clase card
  const newCard = new Card(card, template);
  const cardElement = newCard.renderCard(); // obtiene el nodo DOM ya listo
  const cards = document.querySelector(".gallery");
  cards.append(cardElement);
});

formElement.addEventListener("submit", handleProfileFormSubmit);
buttonPopup.addEventListener("click", handlePopupOpen);
buttonClosePopup.addEventListener("click", handlePopupClose);

buttonAddProfile.addEventListener("click", handlePopupAddOpen);
buttonCloseAdd.addEventListener("click", handlePopupAddClose);

formAdd.addEventListener("submit", handleCardFormSubmit);
closePopupImage.addEventListener("click", handlePopupImageClose);
buttonSubmitAdd.addEventListener("click", handlePopupAddClose); //agregado

//creación
const validator = new FormValidator({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: ".popup__button-close",
  inputErrorClass: ".popup__input-error",
  errorClass: ".popup__error",
});
//utilización
validator.enableValidation();

//evento keydown y click

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    handlePopupClose();
    handlePopupAddClose();
    handlePopupImageClose();
  }
});

document.addEventListener("click", (event) => {
  if (openPopup === event.target) {
    handlePopupClose();
  }
  //2do popup
  if (openPopupAdd === event.target) {
    handlePopupAddClose();
  }
  //3er popup
  if (addImage === event.target) {
    handlePopupImageClose();
  }
});

/*
function handleCardFormSubmit(evt) {
  evt.preventDefault();
  const card = { link: addImage.value, name: addName.value };
  const newCard = createCard(card);
  const cards = document.querySelector(".gallery");
  cards.prepend(newCard.cardElement);
}

function handleProfileFormSubmit(evt) {
  /*popup editar
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  openPopup.classList.remove("popup_opened");
}

/* Aquí se aplica el array
function addCards() {
  initialCards.forEach((item) => {
    const card = createCard(item.name, item.link);
    gallery.append(card);
    openPopupAdd.classList.remove("popup__add_opened");
  });
} */
