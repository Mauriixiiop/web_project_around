let openPopup = document.querySelector(".popup");
let buttonPopup = document.querySelector(".profile__edit-button");
let buttonClosePopup = document.querySelector(".popup__button-close");
let formElement = document.querySelector(".popup__form");
let nameInput = document.querySelector(".popup__form-input-name");
let jobInput = document.querySelector(".popup__form-input-job");
let profileName = document.querySelector(".profile__name");
let profileJob = document.querySelector(".profile__job");
let buttonSubmit = document.querySelector(".popup__submit-button");

function openPopupProfile() {
  handlePopupOpen();
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function handlePopupOpen() {
  openPopup.classList.add("popup_opened");
}

function handlePopupClose() {
  openPopup.classList.remove("popup_opened");
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  openPopup.classList.remove("popup_opened");
}

buttonPopup.addEventListener("click", handlePopupOpen);
buttonClosePopup.addEventListener("click", handlePopupClose);
