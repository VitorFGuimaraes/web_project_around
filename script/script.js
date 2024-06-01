import  Card  from "./card.js";
/* import {
  openPopUp,
  closePopUp,
  openMore,
  closeMore,
  openExpandedImage,
  closeExpandedImage
} from "./utils.js"; */
import Popup from "./popup.js";
import PopupWithImage  from "./popupWithImage.js";
import PopupWithForm  from "./popupWithForm.js";
import Section from "./Section.js";
import EnableValidation from "../script/enableValidation.js";
import UserInfo from "./userinfo.js";

const editButton = document.querySelector('.profile__edit-button');
const closeProfile = document.querySelector('#close-profile');
const closeAddCard = document.querySelector('#close-add-card');
const buttonMore = document.querySelector('.profile__button-more');
const galleryCard = document.querySelector(".gallery");
const popUpCloseButton = document.querySelector(".popup-view-image__close-button")


/* buttonMore.addEventListener('click', openMore);
editButton.addEventListener('click', openPopUp);
closeProfile.addEventListener('click', closePopUp);
closeAddCard.addEventListener('click', closeMore); */
/* popUpCloseButton.addEventListener('click', popUpCloseButton);
 */
const formElement = document.querySelector('.popup__form');

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    const nameInput = document.querySelector('#input-name');
    const jobInput = document.querySelector('#input-role');
    const profileName = document.querySelector('.profile__name');
    const profileRole = document.querySelector('.profile__role');
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


/*
export function popupImage(event) {
  const expandedImage = document.querySelector('.popup-view-image__render-image');
  expandedImage.setAttribute('src', event.target.getAttribute('src'));
  expandedImage.setAttribute('alt', event.target.getAttribute('alt'));
  openExpandedImage();
} */

/* function makeCards() {
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

handleImageForm.addEventListener("submit", newCard); */
/* popUpCloseButton.addEventListener('click', closeExpandedImage);
 */



/* const popUp = document.querySelector('.popup');
const addCard = document.querySelector('.popup-add-card');
const expandedImage = document.querySelector(".popup-view-image");

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
}); */



const formEditProfile = new EnableValidation(
  {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    buttonSelector: '.popup__save-button',
    errorSelector: '.popup__form-error',
  }
)

formEditProfile.enableValidation();

const formImages = new EnableValidation({
  formSelector: '.popup-add-card-form',
  inputSelector: '.popup__input',
  buttonSelector: '.popup__save-button',
  errorSelector: '.popup__form-error',
})

formImages.enableValidation();

const popupWithImage = new PopupWithImage(".popup-view-image");
popupWithImage.setEventListener();

const gallery = new Section({
  items: initialCards,
  renderer: (image) => {
    const card = new Card(image, ({name, link}) => {
      popupWithImage.open(link, name)
    })
    const cardBuilded = card.renderCard();
    gallery.addItem(cardBuilded);
  }
}, ".gallery");

gallery.renderItems();

const userInfo = new UserInfo({ selectorName: ".profile__name", selectorRole: ".profile__role"});

const popupEditProfile = new PopupWithForm(".popup", ([name, role]) => {
  userInfo.setUserInfo(name, role);
});

popupEditProfile.setEventListener();

const openEditProfileButton = document.querySelector('.profile__edit-button');

openEditProfileButton.addEventListener('click', () => {
  popupEditProfile.open();
});

const popupAddCard = new PopupWithForm(".popup-add-card", ([cardName, cardLink]) => {
  const image = {name: cardName, link: cardLink};
  const newCard = new Card(image, ({ name, link}) => {
    popupWithImage.open(link, name)
  });
  const newCardBuilded = newCard.renderCard();
  gallery.addItem(newCardBuilded);
  }
);

popupAddCard.setEventListener();

const openAddCardButton = document.querySelector('.profile__button-more');
openAddCardButton.addEventListener('click', () => {
  popupAddCard.open();
});