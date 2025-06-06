export function handlePopupImageOpen(name, link) {
  const popupImg = openPopupImage.querySelector(".popup__img");
  const popupText = openPopupImage.querySelector(".popup__text");
  popupImg.src = link;
  popupImg.alt = name;
  popupText.textContent = name;
  openPopupImage.classList.add("popup__image_opened");
}
