export default class Popup {
  constructor(selector){
    this._popup = document.querySelector(selector);
    this._closeButton = this._popup.querySelector(".popup__close-button");
  }

  open(){
    this._popup.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close(){
    this._popup.classList.remove("popup_opened");
    this._popup.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    };
  }

  setEventListener(){
    this._closeButton.addEventListener("click", () => this.close());
  }
}



