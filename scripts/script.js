let root = document.querySelector('.root');

let content = root.querySelector('.content');
let profile = content.querySelector('.profile');
let editButton = profile.querySelector('.edit-button');

function formOpen() {
  let popup = root.querySelector('.popup');
  popup.classList.add('popup_opened');

}

editButton.addEventListener('click', formOpen);
