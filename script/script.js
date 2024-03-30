let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelectorAll('.popup__close-button');
let saveImage = document.querySelector('#save-image');
let buttonMore = document.querySelector('.profile__button-more');

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

buttonMore.addEventListener('click', openMore);
editButton.addEventListener('click', openPopUp);
closeButton[0].addEventListener('click', closePopUp);
closeButton[1].addEventListener('click', closeMore);

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