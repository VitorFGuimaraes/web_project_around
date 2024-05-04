
const inputName = document.querySelector("#input-name");
const inputRole = document.querySelector("#input-role");
const formPerfil = document.querySelector(".popup__form");
const errorName = document.querySelector("#input-name-error");
const errorRole = document.querySelector("#input-role-error");
const saveButton = document.querySelector("#save-button");
const maxInputLength = 40;
const minInputLength = 2;
const maxRoleLength = 200;


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

inputName.addEventListener("input", enableValidation);
inputRole.addEventListener("input", enableValidation);

const inputLocation = document.querySelector("#input-location-name");
const inputLocationError = document.querySelector("#input-location-name-error");
const inputImage = document.querySelector("#input-image");
const inputImageError = document.querySelector("#input-image-error");
const cardButton = document.querySelector("#save-image")

const maxLocationLength = 30;

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

inputLocation.addEventListener("input", enableValidation);


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

inputImage.addEventListener("input", enableValidation);

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
  if (name && role) {
    saveButton.disabled = false;
  } else {
    saveButton.disabled = true;
  }
}

function enableValidation(event) {
  if (event.target.id === "input-name" || event.target.id === "input-role" ) {
    handleButtonPerfil()
  } else if (event.target.id === "input-location-name" || event.target.id === "input-image" ) {
    handleButton()
  }
}

