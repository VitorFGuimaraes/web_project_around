import "./index.css";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForms.js";  
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import {
  formAdd,
  formProfileElement,
  openFormButton,
  inputName,
  inputAbout,
  openAddButton,
  selectors,
  popupSelector,
  imageElement,
  captionElement,
  avatarEditBtn,
  formAvatar,
} from "../components/utils.js";
import Api from "../components/Api.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/web_ptbr_08",
  headers: {
    authorization: "55ee091e-fdde-4068-8e71-e71a57ad15b5",
    "Content-Type": "application/json"
  }
});

const popupWithImage = new PopupWithImage(popupSelector, imageElement, captionElement, () => handleImageClick());
popupWithImage.setEventListeners();

const popupDeleteConfirmation = new PopupWithConfirmation({
  popupSelector: ".popup_delete",
  submitCallback: (card) => {
    return api
        .deleteCard(card._cardId)
        .then(() => {
          card.removeElement();
        })
        .catch((err) => {
          console.log(err);
        });
  },
});
popupDeleteConfirmation.setEventListeners();

const userInfo = new UserInfo(selectors);
api.getUserInfo()
.then(({ name, about, avatar }) => {
  userInfo.setUserInfo(name, about, avatar);
})
.catch((err) => {
  console.log(err);
});

const renderNewCard = (item) => {
  const card = new Card(
    item,
    "#template-card",
    popupWithImage,
    () => {
      popupDeleteConfirmation.open(card);
    },
    api.addLikes.bind(api),
    api.removeLikes.bind(api)
  );
  return card.generateCard();
};

api.getInitialCards()
  .then((result) => {
    const defaultCardList = new Section(
      {
        items: result,
        renderer: (item) => {
          defaultCardList.addItem(renderNewCard(item));
        },
      },
      ".elements__card"
    );
    defaultCardList.renderItems();
  })
  .catch((err) => {
    console.log(err);
  });

const popupAddForm = new PopupWithForm({
  popupSelector: ".popup-add",
  submitCallback: () => {
    const cardData = {
      name: document.querySelector(".popup__form-input_title").value,
      link: document.querySelector(".popup__form-input_link").value,
    };

    api.createNewCard(cardData)
    .then((result) => {
        document
          .querySelector(".elements__card")
          .prepend(renderNewCard(result));
      })
      .catch((err) => {
        console.log(err);
      });
  },
});

popupAddForm.setEventListeners();

openAddButton.addEventListener("click", () => {
  popupAddForm.open();
});

const popupProfile = new PopupWithForm({
  popupSelector: ".popup",
  submitCallback: ({ name , about }) =>
  { 
    api.editProfile(name, about);
    const { avatar } = userInfo.getUserInfo();
    userInfo.setUserInfo(name, about, avatar);
  },
});
popupProfile.setEventListeners();

openFormButton.addEventListener("click", () => {
  const { name, about } = userInfo.getUserInfo();
  inputName.value = name;
  inputAbout.value = about;
  popupProfile.open();
});

const popupEditAvatar = new PopupWithForm({
  popupSelector: ".popup-edit",
  submitCallback: ({ image }) => {
    api.editAvatar({
      avatar: document.querySelector(".popup__form-input_avatar").value,
    });
    const { name, about } = userInfo.getUserInfo();
    userInfo.setUserInfo(name, about, image);
  },
});
popupEditAvatar.setEventListeners();

avatarEditBtn.addEventListener("click", () => {
  popupEditAvatar.open();
});

const formConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__form-input",
  submitButtonSelector: ".popup__button-submit",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const formValidatorAdd = new FormValidator(formConfig, formAdd);
formValidatorAdd.enableValidation();

const formValidatorProfile = new FormValidator(formConfig, formProfileElement); 
formValidatorProfile.enableValidation();

const formValidatorAvatar = new FormValidator(formConfig, formAvatar);
formValidatorAvatar.enableValidation();