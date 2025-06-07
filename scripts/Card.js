import { handlePopupImageOpen } from "./utils";
//1. Creación de la clase
export class Card {
  // 1A Declaración de las propiedades de la clase
  constructor(cardData, cardTemplate) {
    this.cardData = cardData;
    this.cardTemplate = cardTemplate;
    this.card = null;
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
    this.card.querySelector(".gallery__card-image").src = this.cardData.link; //ojo con el nombre
    this.card.querySelector(".gallery__card-name").textContent =
      this.cardData.name;
    this.setEventListeners();
    return this.card; //hacer el retorno para la funcionalidad
  }

  setEventListeners() {
    this.cardLike = this.card.querySelector(".gallery__card-icon");
    this.cardDelete = this.card.querySelector(".gallery__card-delete");

    this.cardDelete.addEventListener("click", () => {
      card.remove();
    });
    this.cardLike.addEventListener("click", () => {
      cardLike.classList.toggle("gallery__card-icon-active");
    });
    this.cardImage.addEventListener("click", () => {
      handlePopupImageOpen(data.name, data.link);
    });
  }
}
