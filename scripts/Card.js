import { handlePopupImageOpen } from "./utils.js";
//1. Creación de la clase
export class Card {
  // 1A Declaración de las propiedades de la clase
  constructor(cardData, cardTemplate) {
    this.cardData = cardData;
    this.cardTemplate = cardTemplate;
    this.card = null;
    this.cardImage = document.querySelector(".gallery__card-image");
  }
  //1B Declaración de los métodos de la clase
  renderCard() {
    this.setDataTemplate();
    return this.card;
  }

  cloneTemplate() {
    return this.cardTemplate.content
      .querySelector(".gallery__card")
      .cloneNode(true);
  }

  setDataTemplate() {
    this.card = this.cloneTemplate();
    const cardImage = this.card.querySelector(".gallery__card-image");
    cardImage.src = this.cardData.link;
    cardImage.alt = this.cardData.name;
    this.card.querySelector(".gallery__card-name").textContent =
      this.cardData.name;

    this.cardImage = cardImage; // guardar referencia para eventos
    this.setEventListeners();
    return this.card;
  }

  setEventListeners() {
    this.cardLike = this.card.querySelector(".gallery__card-icon");
    this.cardDelete = this.card.querySelector(".gallery__card-delete");

    this.cardDelete.addEventListener("click", () => {
      this.card.remove();
    });

    this.cardLike.addEventListener("click", () => {
      this.cardLike.classList.toggle("gallery__card-icon-active");
    });

    this.cardImage.addEventListener("click", () => {
      handlePopupImageOpen(this.cardData.name, this.cardData.link);
    });
  }
}
