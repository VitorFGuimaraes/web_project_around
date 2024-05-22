import  Card  from "./card.js";
import {
  openPopUp,
  closePopUp,
  openMore,
  closeMore,
  openExpandedImage,
  closeExpandedImage
} from "./utils.js";

import EnableValidation from "../script/enableValidation.js";

const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelectorAll('.popup__close-button');
const buttonMore = document.querySelector('.profile__button-more');
const galleryCard = document.querySelector(".gallery");
const popUpCloseButton = document.querySelector(".popup-view-image__close-button")



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
    link: "../images/Serra-da-Estrela.jpg"
  },
  {
    name: "Gerês - PT",
    link: "../images/Gerês.jpg"
  },
  {
    name: "Nazaré - PT",
    link: "../images/Nazaré.jpg"
  },
  {
    name: "Santos - SP",
    link: "../images/Santos.jpg"
  },
  {
    name: "Porto - PT",
    link: "../images/porto.jpg"
  },
  {
    name: "Gaia - PT",
    link: "../images/familia.jpg"
  }
];



export function popupImage(event) {
  const expandedImage = document.querySelector('.popup-view-image__render-image');
  expandedImage.setAttribute('src', event.target.getAttribute('src'));
  expandedImage.setAttribute('alt', event.target.getAttribute('alt'));
  openExpandedImage();
}

function makeCards() {
  initialCards.forEach((element) => {
   const card = new Card(element.name, element.link);
   const generateNewCard = card.renderCard();
   galleryCard.append(generateNewCard);
  });
};

makeCards();

const handleImageForm = document.querySelector(".popup-add-card-form");

function newCard(event) {
  event.preventDefault();
  const inputName = document.querySelector("#input-location-name");
  const inputLink = document.querySelector("#input-image");
  const card = new Card(inputName.value, inputLink.value);
  const newCard =  card.renderCard();
  galleryCard.prepend(newCard);
  closeMore();
}

handleImageForm.addEventListener("submit", newCard);
popUpCloseButton.addEventListener('click', closeExpandedImage);


function escapeClose(event) {
  if (event.key === "Escape") {
    closePopUp()
    closeExpandedImage()
    closeMore()
  }
};

document.addEventListener("keydown", escapeClose);

let popUp = document.querySelector('.popup');
let addCard = document.querySelectorAll('.popup')[1];
let expandedImage = document.querySelectorAll(".popup")[2];

popUp.addEventListener("click", (event) => {
if (event.target.classList.contains("popup")) {
  popUp.classList.remove("popup_opened");
}
} );

addCard.addEventListener("click", (event) => {
  if (event.target.classList.contains("popup-add-card")) {
    addCard.classList.remove("popup_opened");
  }
} );

expandedImage.addEventListener("click", (event) => {
  if (event.target.classList.contains("popup-view-image")) {
    expandedImage.classList.remove("popup_opened");
  }
});



const formEditProfile = new EnableValidation(
  {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    buttonSelector: '.popup__save-button',
    errorSelector: '.popup__form-error',
  }
)

formEditProfile.validation();

const formImages = new EnableValidation({
  formSelector: '.popup-add-card-form',
  inputSelector: '.popup__input',
  buttonSelector: '.popup__save-button',
  errorSelector: '.popup__form-error',
})

formImages.validation();
