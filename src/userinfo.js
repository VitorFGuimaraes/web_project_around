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