let openPopup = document.querySelector(".popup");
let buttonPopup = document.querySelector(".profile__edit-button");
let buttonClosePopup = document.querySelector(".popup__button-close");
let formElement = document.querySelector(".popup__form");
let nameInput = document.querySelector(".popup__form-name");
let jobInput = document.querySelector(".popup__form-job");
let profileName = document.querySelector(".profile__name");
let profileJob = document.querySelector(".profile__job");
let buttonSubmit = document.querySelector(."popup__submit-button");


function editProfile() {
  handlePopupOpen();
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function handlePopupOpen() {
  openPopup.classList.add();
}

function handlePopupClose() {
  openPopup.classList.remove();
}

function handleProfileFormSubmit(evt) {

}

buttonPopup.addEventListener("click", handlePopupOpen);
buttonPopup.addEventListener("click", editProfile);
buttonPopup.addEventListener("click", handlePopupClose)