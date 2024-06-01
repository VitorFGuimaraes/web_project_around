import  Popup  from "./popup.js";

export default class PopupWithImage extends Popup {
  constructor(selector){
    super(selector)
    this._image = this._popup.querySelector(".popup-view-image__render-image");
  }

  open(link, legend){
    super.open();
    this._image.setAttribute("src", link);
    this._image.setAttribute("alt", legend);
  }
}
