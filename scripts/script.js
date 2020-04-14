let root = document.querySelector('.root');
let content = root.querySelector('.content');
let profile = content.querySelector('.profile');
let editButton = profile.querySelector('.edit-button');
let editForm = root.querySelector('.popup__edit');
let popup = root.querySelector('.popup');
let titleProfile = profile.querySelector('.profile__title');
let subtitleProfile = profile.querySelector('.profile__subtitle');
let nameInput = editForm.querySelector('.popup__item_name');
let jobInput = editForm.querySelector('.popup__item_about');


function formOpen() {
  popup.classList.add('popup_opened');

  nameInput.value = titleProfile.textContent;
  jobInput.value = subtitleProfile.textContent;

}

editButton.addEventListener('click', formOpen);

let closeButton = root.querySelector('.popup__button_close');

function formClose() {
  popup.classList.remove('popup_opened');
}

closeButton.addEventListener('click', formClose);

function formSubmitHandler (evt) {
  evt.preventDefault();

  titleProfile.textContent = nameInput.value;
  subtitleProfile.textContent = jobInput.value;

  formClose();
}

editForm.addEventListener('submit', formSubmitHandler);
