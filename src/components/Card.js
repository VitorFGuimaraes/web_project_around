export default class Card {
  constructor(dataCard,  templateSelector, popupWithImage, handleDeleteClick,  handleAddLike,
    handleRemoveLike) {
    this._link = dataCard.link;
    this._name = dataCard.name;
    this._data = dataCard;
    this.owner = dataCard.owner._id;
    this._cardId = dataCard._id;
    this._likes = dataCard.likes;
    this._templateSelector = templateSelector;
    this._popupWithImage = popupWithImage;
    this._handleDeleteClick = handleDeleteClick;
    this._handleAddLike = handleAddLike;
    this._handleRemoveLike = handleRemoveLike;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector("#template-card")
      .content.querySelector(".elements__li")
      .cloneNode(true);

    return cardElement;
  }
  
  removeElement() {
    this._element.remove();
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this.likeClick();
    this._element.querySelector(".elements__card-img").src = this._link;
    this._element.querySelector(".elements__card-img").alt = this._name;
    this._element.querySelector(".elements__card-name").textContent = this._name;
    this._element.querySelector(".elements__like-count").textContent = this._likes.length;


    const trashDeleteOwner = () => {
      const myId = "7555a63afa45f53ca9c0cefa";
      if (this.owner === myId) {
        this._element
          .querySelector(".elements__trash")
          .classList.add("elements__trash_hidden");
        return true;
      }
    };
    trashDeleteOwner();

    if (this.isLiked()) {
      const likeButton = this._element.querySelector(".elements__button-like");
      likeButton.classList.add("elements__button-like_click");
    }
    
    return this._element;
  }

  isLiked() {
    const myId = "7555a63afa45f53ca9c0cefa";

    return this._likes.find((res) => res._id === myId);
  }

  likeClick() {
    const likeButton = this._element.querySelector(".elements__button-like");
    const likeCount = this._element.querySelector(".elements__like-count");

    const liked = () => {
      if (!this.isLiked()) {

        this._handleAddLike(this._cardId).then((res) => {

          likeButton.classList.add("elements__button-like_click");

          const active = this._element.querySelector(".elements__button-like_click");

          localStorage.setItem(active, likeButton);
          
          likeCount.textContent = parseInt(++this._likes.length);
          
          this._likes = res.likes;
        });
      } else {
        this._handleRemoveLike(this._cardId).then((res) => {
          likeButton.classList.remove("elements__button-like_click");
          this._likes = res.likes;
          likeCount.textContent = this._likes.length;
        });
      }
    };
    likeButton.addEventListener("click", liked, () => {
      const active = likeButton.classList.add("elements__like-button_click");
      sessionStorage.getItem(active);
    });
  }
  _trash() {
    const trashButton = this._element
    .querySelector(".elements__trash");
    trashButton.addEventListener("click", () => {
      this._handleDeleteClick();
    });
  }

  _setEventListeners() {
    this._trash();
    this._element.querySelector(".elements__card-img").addEventListener("click", () => {
      this._handleImageClick();
    });
  }

  _handleImageClick() {
    this._popupWithImage.open(this._link, this._name);
  }
}