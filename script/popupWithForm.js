import Popup  from "./popup.js";

export default class PopupWithForm extends Popup {
  constructor(selector, submitCallback){
    super(selector)
    this._form = this._popup.querySelector(".popup__form");
    this._submitCallback = submitCallback;
  }

  _getInputValues(){
    return Array.from(this._popup.querySelectorAll(".popup__input")).map((input) => input.value);
  }

  setEventListener(){
    super.setEventListener();
    this._form.addEventListener("submit", (event) => {
      event.preventDefault();
      const values = this._getInputValues();
      this._submitCallback(values);
      this._form.reset();
      this.close();
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}
