import  Popup  from "./popup.js";

export default class PopupWithConfirmation extends Popup{
  constructor(seletor){
    super(seletor)
    this._confirmationButton = this._popup.querySelector(".popup-confirmation-button");
  }

  open(event){
    super.open()
    this._card = event.target;
    console.log(this);
  }

  setEventListener(){
    super.setEventListener();
    this._confirmationButton.addEventListener("click", () => {
      this._card.parentNode.parentNode.remove();
      this.close();
    })
  }
}



