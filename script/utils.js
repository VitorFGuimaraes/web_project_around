function openPopUp() {
  const popUp = document.querySelector('.popup');
  popUp.classList.add('popup_opened');
  handleButtonPerfil()
}

function closePopUp() {
  const popUp = document.querySelector('.popup');
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

export {
  openPopUp,
  closePopUp,
  openMore,
  closeMore,
  openExpandedImage,
  closeExpandedImage
}