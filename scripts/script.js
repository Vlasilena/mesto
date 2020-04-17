const root = document.querySelector('.root');
const content = root.querySelector('.content');
const profile = content.querySelector('.profile');
const editButton = profile.querySelector('.edit-button');
const editForm = root.querySelector('.popup__edit');
const popup = root.querySelector('.popup');

function formOpen() {
  popup.classList.add('popup_opened');

  let titleProfile = profile.querySelector('.profile__title');
  let subtitleProfile = profile.querySelector('.profile__subtitle');

  let nameInput = editForm.querySelector('.popup__item_name');
  let jobInput = editForm.querySelector('.popup__item_about');

  nameInput.value = titleProfile.textContent;
  jobInput.value = subtitleProfile.textContent;
}

editButton.addEventListener('click', formOpen);

const closeButton = root.querySelector('.popup__button_close');

function formClose() {
  popup.classList.remove('popup_opened');
}

closeButton.addEventListener('click', formClose);

function formSubmitHandler (evt) {
  evt.preventDefault();

  let nameInput = editForm.querySelector('.popup__item_name');
  let jobInput = editForm.querySelector('.popup__item_about');

  let titleProfile = profile.querySelector('.profile__title');
  let subtitleProfile = profile.querySelector('.profile__subtitle');

  titleProfile.textContent = nameInput.value;
  subtitleProfile.textContent = jobInput.value;

  formClose();
}

editForm.addEventListener('submit', formSubmitHandler);
