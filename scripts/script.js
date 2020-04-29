const root = document.querySelector('.root');
const content = root.querySelector('.content');
const profile = content.querySelector('.profile');
const editButton = profile.querySelector('.edit-button');
const editForm = root.querySelector('.popup__edit');
const popup = root.querySelector('.popup');
const closeButton = root.querySelector('.popup__button_close');
const addButton = root.querySelector('.add-button');
const addPopup = root.querySelector('.add-popup');



function formCloseOpen () {
  const titleProfile = profile.querySelector('.profile__title');
  const subtitleProfile = profile.querySelector('.profile__subtitle');

  let nameInput = editForm.querySelector('.popup__item_name');
  let jobInput = editForm.querySelector('.popup__item_about');

  nameInput.value = titleProfile.textContent;
  jobInput.value = subtitleProfile.textContent;

  popup.classList.toggle('popup_opened');
}

function formAdd () {
  let namePlace = editForm.querySelector('.popup__item_name-place');
  let linkPlace = editForm.querySelector('.popup__item_link-place');
  addPopup.classList.toggle('popup_opened');
}

editButton.addEventListener('click', formCloseOpen);
closeButton.addEventListener('click', formCloseOpen);
addButton.addEventListener('click', formAdd);


function formSubmitHandler (evt) {
  evt.preventDefault();

  const nameInput = editForm.querySelector('.popup__item_name');
  const jobInput = editForm.querySelector('.popup__item_about');

  let titleProfile = profile.querySelector('.profile__title');
  let subtitleProfile = profile.querySelector('.profile__subtitle');

  titleProfile.textContent = nameInput.value;
  subtitleProfile.textContent = jobInput.value;

  formCloseOpen();
}

editForm.addEventListener('submit', formSubmitHandler);
