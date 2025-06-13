export function handlePopupOpen(openPopup) {
  /* Abrir el popup*/
  openPopup.classList.add("popup_opened");
}

export function handlePopupClose() {
  /* Cerrar el popup*/
  openPopup.classList.remove("popup_opened"); //ERROR
}

export function handlePopupImageClose() {
  openPopupImage.classList.remove("popup__image_opened");
}

export function openPopupProfile() {
  handlePopupOpen(openPopupImage);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

export function handleProfileFormSubmit(evt) {
  /*popup editar*/
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  //openPopup.classList.remove("popup_opened");
  handlePopupClose();
}

export function handleCardFormSubmit(evt) {
  evt.preventDefault();
  const card = { link: addImage.value, name: addName.value };
  const newCard = createCard(card);
  const cards = document.querySelector(".gallery");
  cards.prepend(newCard.cardElement);
}

export function handlePopupAddOpen() {
  /*Abrir el otro popup*/
  openPopupAdd.classList.add("popup__add_opened"); //ERROR
}

export function handlePopupAddClose() {
  /*Cerrar el otro popup*/
  openPopupAdd.classList.remove("popup__add_opened");
}

export function addCards() {
  initialCards.forEach((item) => {
    const card = createCard(item.name, item.link);
    gallery.append(card);
    openPopupAdd.classList.remove("popup__add_opened");
  });
}

export function handlePopupImageOpen(name, link, openPopupImage) {
  const popupImg = openPopupImage.querySelector(".popup__img");
  const popupText = openPopupImage.querySelector(".popup__text");
  popupImg.src = link;
  popupImg.alt = name;
  popupText.textContent = name;
  openPopupImage.classList.add("popup__image_opened");
}
