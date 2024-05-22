export default class EnableValidation {
  constructor(params) {
    this._form = document.querySelector(params.formSelector);
    this._inputs = this._form.querySelectorAll(params.inputSelector);
    this._button = this._form.querySelector(params.buttonSelector);
    this._errorClass = this._form.querySelectorAll(params.errorSelector);
  }

   _checkInputs() {
    if ((Array.from(this._inputs).some((i) => i.validity.valid === false))) {
      this._button.disabled = true;
    } else {
      this._button.disabled = false;
    }
  }

  validation() {
    this._inputs.forEach((i) => {
      i.addEventListener('input', (e) => {
        const error = Array.from(this._errorClass).find((error) => error.id === `${i.id}-error`);
        this._checkInputs();
        if(!e.target.validity.valid) {
          error.textContent = e.target.validationMessage;
        } else {
          error.textContent = '';
        }
      })
    })
  }
}
