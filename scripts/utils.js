export function handlePopupImageOpen(name, link) {
  const popupImg = openPopupImage.querySelector(".popup__img");
  const popupText = openPopupImage.querySelector(".popup__text");
  popupImg.src = link;
  popupImg.alt = name;
  popupText.textContent = name;
  openPopupImage.classList.add("popup__image_opened");
}

export function handlePopupImageClose() {
  openPopupImage.classList.remove("popup__image_opened");
}

export function openPopupProfile() {
  handlePopupOpen();
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

export function handlePopupOpen() {
  /* Abrir el popup*/
  openPopup.classList.add("popup_opened");
}

export function handlePopupClose() {
  /* Cerrar el popup*/
  openPopup.classList.remove("popup_opened");
}

export function handlePopupAddOpen() {
  /*Abrir el otro popup*/
  openPopupAdd.classList.add("popup__add_opened");
}

export function handlePopupAddClose() {
  /*Cerrar el otro popup*/
  openPopupAdd.classList.remove("popup__add_opened");
}
