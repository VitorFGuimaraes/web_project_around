let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelectorAll('.popup__close-button');
let saveImage = document.querySelector('#save-image');
let buttonMore = document.querySelector('.profile__button-more');
let galleryCard = document.querySelector(".gallery");
let createCard = document.querySelector("#save-image");
let popUpCloseButton = document.querySelector(".popup-view-image__close-button")

function openPopUp() {
  let popUp = document.querySelector('.popup');
  popUp.classList.add('popup_opened');
}

function closePopUp() {
  let popUp = document.querySelector('.popup');
  popUp.classList.remove('popup_opened');
}

function openMore() {
  let popUp = document.querySelectorAll('.popup')[1];
  popUp.classList.add('popup_opened');
}

function closeMore() {
  let popUp = document.querySelectorAll('.popup')[1];
  popUp.classList.remove('popup_opened');
}

function openExpandedImage() {
  let popUp = document.querySelectorAll('.popup')[2];
  popUp.classList.add('popup_opened');
}

function closeExpandedImage() {
  let popUp = document.querySelectorAll('.popup')[2];
  popUp.classList.remove('popup_opened');
}


function liked(event) {
  if (event.target.classList.contains("gallery__like-image_black")) {
    event.target.classList.remove("gallery__like-image_black");
  } else {
    event.target.classList.add("gallery__like-image_black");;
  };
  console.log("deu");
}


buttonMore.addEventListener('click', openMore);
editButton.addEventListener('click', openPopUp);
closeButton[0].addEventListener('click', closePopUp);
closeButton[1].addEventListener('click', closeMore);
popUpCloseButton.addEventListener('click', popUpCloseButton);

let formElement = document.querySelector('.popup__form');

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    let nameInput = document.querySelector('#input-name');
    let jobInput = document.querySelector('#input-role');
    let profileName = document.querySelector('.profile__name');
    let profileRole = document.querySelector('.profile__role');
    profileName.textContent = nameInput.value;
    profileRole.textContent = jobInput.value;
    closePopUp();
}

formElement.addEventListener('submit', handleProfileFormSubmit);

const initialCards = [
  {
    name: "Serra da Estrela - PT",
    link: "https://i.imgur.com/YJvteSM.jpeg"
  },
  {
    name: "Gerês - PT",
    link: "https://i.imgur.com/1huc6VS.jpeg"
  },
  {
    name: "Nazaré - PT",
    link: "https://i.imgur.com/EqPXb0c.jpeg"
  },
  {
    name: "Santos - SP",
    link: "https://i.imgur.com/0BzLXif.jpeg"
  },
  {
    name: "Porto - PT",
    link: "https://i.imgur.com/wfVO5Pa.jpeg"
  },
  {
    name: "Gaia - PT",
    link: "https://i.imgur.com/UCLX3G4.jpeg"
  }
];

function createTagWithClass(tag, className,) {
  const element = document.createElement(tag);
  element.classList.add(className);
  return element;
}

function deleteCard(event) {
  event.target.parentNode.parentNode.remove();
};

function popupImage(event) {
  const expandedImage = document.querySelector('.popup-view-image__render-image');
  expandedImage.setAttribute('src', event.target.getAttribute('src'));
  expandedImage.setAttribute('alt', event.target.getAttribute('alt'));
  openExpandedImage();
}

function renderCard(name, link) {
  const initialCard = createTagWithClass('div', "gallery__card");
  galleryCard.appendChild(initialCard);

  const deleteButton = createTagWithClass('button', "gallery__delete-button");
  initialCard.appendChild(deleteButton);
  deleteButton.addEventListener("click", deleteCard);

  const deleteImageButton = createTagWithClass('img', "gallery__delete-image");
  deleteImageButton.setAttribute("src", "./images/delete-button.svg");
  deleteButton.appendChild(deleteImageButton);

  const imageGallery = createTagWithClass('img', 'gallery__card-image');
  imageGallery.addEventListener('click', popupImage);
  imageGallery.setAttribute("src", link);
  initialCard.appendChild(imageGallery);
  imageGallery.setAttribute("alt", name);


  const wrapperNameMoreButton = createTagWithClass('div', 'gallery__wrapper-text-and-like-button');
  initialCard.appendChild(wrapperNameMoreButton);

  const imageName = createTagWithClass('p', 'gallery__card-name');
  wrapperNameMoreButton.appendChild(imageName);
  imageName.innerText = name;

  const likeButton = createTagWithClass('button', 'gallery__like-button');
  wrapperNameMoreButton.appendChild(likeButton);
  likeButton.addEventListener("click", liked);

}

function makeCards() {
  initialCards.forEach((element) => {
    renderCard(element.name, element.link);
  });
};

makeCards();

const handleImageForm = document.querySelector(".popup-add-card-form");

function newCard(event) {
  console.log(event);
  event.preventDefault();
  const inputName = document.querySelector("#input-location-name");
  const inputLink = document.querySelector("#input-image");
  renderCard(inputName.value, inputLink.value);
  closeMore();
}

handleImageForm.addEventListener("submit", newCard);
popUpCloseButton.addEventListener('click', closeExpandedImage);

