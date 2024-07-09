export default class UserInfo {
  constructor({selectorName, selectorRole}){
    this._profileName = document.querySelector(selectorName);
    this._profileRole = document.querySelector(selectorRole);
  }

  getUserInfo(){
    return {name: this._profileName.textContent, role: this._profileRole.textContent};
  }

  setUserInfo(newName, newRole){
    this._profileName.textContent = newName;
    this._profileRole.textContent = newRole;
  }
}

/* export default class UserInfo {
  constructor({ nameSelector, aboutSelector, avatarSelector }) {
    this._nameElement = document.querySelector(nameSelector);
    this._aboutElement = document.querySelector(aboutSelector);
    this._avatarElement = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      about: this._aboutElement.textContent,
      avatar: this._avatarElement.src,
    };
  }

  setUserInfo(name, about, image) {
    this._nameElement.textContent = name;
    this._aboutElement.textContent = about;
    this._avatarElement.src = image;
  }
}*/