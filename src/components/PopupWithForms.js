import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({popupSelector, submitCallback}) {
    super(popupSelector);
    this._popupElement = document.querySelector(popupSelector);
    this._submitCallback = submitCallback;   
    this._formElement =  this._popupElement.querySelector(".popup__form");
    this._submitButton = this._popupElement.querySelector(".popup__button-submit");
  }


  _getInputValues() {
    const inputs = this._formElement.querySelectorAll(".popup__form-input");

    const values = {};

    inputs.forEach((input) => {
      values[input.name] = input.value;
    });

    return values;
  }

  setInputValues(values) {
    const inputs = this._formElement.querySelectorAll(".popup__form-input");
    inputs.forEach((input) => {
      input.value = values[input.name];
    });
  }

  _renderLoading(isLoading) {
    if (isLoading) {
      this._submitButton.textContent = "Salvando...";
    }
  }

  close() {
    super.close();
    this._formElement.reset();
    this._submitButton.textContent = "Salvar";
  }
  
  setEventListeners() {
    super.setEventListeners();

    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitCallback(this._getInputValues());
      this._renderLoading(true);
      this.close();
    });
  }
}