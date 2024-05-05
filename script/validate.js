function enableValidation(params) {
  const form = document.querySelector(params.formSelector);
  const inputs = form.querySelectorAll(params.inputSelector);
  const button = form.querySelector(params.buttonSelector);
  const errorClass = form.querySelectorAll(params.errorSelector);

  function checkInputs() {
    if ((Array.from(inputs).some((i) => i.validity.valid === false))) {
      button.disabled = true;
    } else {
      button.disabled = false;
    }
  }

  inputs.forEach((i) => {
    i.addEventListener('input', (e) => {
      const error = Array.from(errorClass).find((error) => error.id === `${i.id}-error`);
      checkInputs();
      if(!e.target.validity.valid) {
        error.textContent = e.target.validationMessage;
      } else {
        error.textContent = '';
      }
    })
  })
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  buttonSelector: '.popup__save-button',
  errorSelector: '.popup__form-error',
});

enableValidation({
  formSelector: '.popup-add-card-form',
  inputSelector: '.popup__input',
  buttonSelector: '.popup__save-button',
  errorSelector: '.popup__form-error',
});