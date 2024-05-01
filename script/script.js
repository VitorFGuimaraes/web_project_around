const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelectorAll('.popup__close-button');
const saveImage = document.querySelector('#save-image');
const buttonMore = document.querySelector('.profile__button-more');
const galleryCard = document.querySelector(".gallery");
const createCard = document.querySelector("#save-image");
const popUpCloseButton = document.querySelector(".popup-view-image__close-button")

function openPopUp() {
  const popUp = document.querySelector('.popup');
  popUp.classList.add('popup_opened');
  handleButtonPerfil()
}

function closePopUp() {
  let popUp = document.querySelector('.popup');
  popUp.classList.remove('popup_opened');
}

function openMore() {
  let popUp = document.querySelectorAll('.popup')[1];
  popUp.classList.add('popup_opened');
  handleButton()
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
    link: "https://i.imgur.com/9UIIOkT.jpg"
  },
  {
    name: "Gerês - PT",
    link: "https://i.imgur.com/SpYcR5B.jpg"
  },
  {
    name: "Nazaré - PT",
    link: "https://i.imgur.com/9QqRSM6.jpg"
  },
  {
    name: "Santos - SP",
    link: "https://i.imgur.com/zIsWudK.jpg"
  },
  {
    name: "Porto - PT",
    link: "https://i.imgur.com/ClOpZ8R.jpg"
  },
  {
    name: "Gaia - PT",
    link: "https://i.imgur.com/JcrXLQ0.jpg"
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
  event.preventDefault();
  const inputName = document.querySelector("#input-location-name");
  const inputLink = document.querySelector("#input-image");
  renderCard(inputName.value, inputLink.value);
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

const inputName = document.querySelector("#input-name");
const inputRole = document.querySelector("#input-role");
const formPerfil = document.querySelector(".popup__form");
const errorName = document.querySelector("#input-name-error");
const errorRole = document.querySelector("#input-role-error");
const saveButton = document.querySelector("#save-button");
let maxInputLength = 40;
let minInputLength = 2;


function validateInputName() {
  if(!inputName.value) {
    errorName.textContent = "Preencha esse campo."
    inputName.classList.add("popup__form-error")
  } else if(inputName.value.length < minInputLength) {
    errorName.textContent = "O campo deve ter ao menos 2 caracteres."
    inputName.classList.add("popup__form-error")
  } else if(inputName.value.length > maxInputLength) {
    errorName.textContent = "O campo deve ter entre 2 a 40 caracteres."
    inputName.classList.add("popup__form-error")
  } else {
    errorName.textContent = ""
    inputName.classList.remove("popup__form-error")
    return true;
  }
}

function validateInputRole() {
  if(!inputRole.value || inputRole.value === "") {
    errorRole.textContent = "Preencha esse campo."
    inputRole.classList.add("popup__form-error")
  } else if(inputRole.value.length < minInputLength) {
    errorRole.textContent = "O campo deve ter ao menos 2 caracteres."
    inputRole.classList.add("popup__form-error");
  } else if(inputRole.value.length > maxInputLength) {
    errorRole.textContent = "O campo deve ter entre 2 a 200 caracteres."
    inputRole.classList.add("popup__form-error")
  } else {
    errorRole.textContent = ""
    inputRole.classList.remove("popup__form-error")
    return true;
  }
}

inputName.addEventListener("input", handleButtonPerfil);
inputRole.addEventListener("input", handleButtonPerfil);

const inputLocation = document.querySelector("#input-location-name");
const inputLocationError = document.querySelector("#input-location-name-error");
const inputImage = document.querySelector("#input-image");
const inputImageError = document.querySelector("#input-image-error");
const cardButton = document.querySelector("#save-image")

const maxLocationLength = 30;
const minLocationLength = 2;

function validateLocation() {
  if (!inputLocation.value) {
    inputLocationError.textContent = "Preencha esse campo."
    inputLocation.classList.add("input-location-name-error")
  } else if(inputLocation.value.length < minLocationLength) {
    inputLocationError.textContent = "O campo deve ter ao menos 2 caracteres."
    inputLocation.classList.add("input-location-name-error")
  } else if(inputLocation.value.length > maxLocationLength) {
  inputLocationError.textContent = "O campo deve ter entre 2 a 30 caracteres."
  inputLocation.classList.add("input-location-name-error")
  } else {
  inputLocationError.textContent = ""
  inputLocation.classList.remove("input-location-name-error")
  return true;
  }
}

inputLocation.addEventListener("input", handleButton);


function validateLink() {
  if(!inputImage.value) {
  inputImageError.textContent = "Preencha esse campo."
  inputImageError.classList.add("popup-add-card-error")
  } else if (!inputImage.value.startsWith("https://")) {
  inputImageError.textContent = "Insira uma url valida"
  inputImageError.classList.add("popup-add-card-error")
  } else {
  inputImageError.textContent = ""
  inputImageError.classList.remove("popup-add-card-error")
  return true
  }
}

inputImage.addEventListener("input", handleButton);

function handleButton() {
  const link = validateLink();
  const location = validateLocation();
  if (link && location) {
    cardButton.disabled = false;
  } else {
    cardButton.disabled = true;
  }
}

function handleButtonPerfil() {
  const name = validateInputName();
  const role = validateInputRole();
  console.log(name, role);
  if (name && role) {
    saveButton.disabled = false;
  } else {
    saveButton.disabled = true;
  }
}
