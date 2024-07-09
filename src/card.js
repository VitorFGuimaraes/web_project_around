export default class Card {
  constructor({ name, link }, handleCardClick, handleDelete) {
    this._name = name;
    this._link = link;
    this._handleCardClick = handleCardClick;
    this._handleDelete = handleDelete;
  }

  _createTagWithClass(tag, className) {
    const element = document.createElement(tag);
    element.classList.add(className);
    return element;
  }



  _liked(event) {
    if (event.target.classList.contains("gallery__like-image_black")) {
      event.target.classList.remove("gallery__like-image_black");
    } else {
      event.target.classList.add("gallery__like-image_black");
    };
  }

  renderCard() {
    const initialCard = this._createTagWithClass('div', "gallery__card");
    const deleteButton = this._createTagWithClass('button', "gallery__delete-button");
    initialCard.appendChild(deleteButton);
    deleteButton.addEventListener("click", this._handleDelete);

    const deleteImageButton = this._createTagWithClass('img', "gallery__delete-image");
    deleteButton.appendChild(deleteImageButton);

    const imageGallery = this._createTagWithClass('img', 'gallery__card-image');
    imageGallery.setAttribute("src", this._link);
    initialCard.appendChild(imageGallery);
    imageGallery.setAttribute("alt", this._name);
    imageGallery.addEventListener('click', () => {
      this._handleCardClick({link: this._link , name: this._name});
    });


    const wrapperNameMoreButton = this._createTagWithClass('div', 'gallery__wrapper-text-and-like-button');
    initialCard.appendChild(wrapperNameMoreButton);

    const imageName = this._createTagWithClass('p', 'gallery__card-name');
    wrapperNameMoreButton.appendChild(imageName);
    imageName.innerText = this._name;

    const likeButton = this._createTagWithClass('button', 'gallery__like-button');
    wrapperNameMoreButton.appendChild(likeButton);
    likeButton.addEventListener("click", this._liked);

    return initialCard;
  }
 }